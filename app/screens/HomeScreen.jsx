import {
    View,  
    Image, 
    TextInput,
    TouchableOpacity, 
    ScrollView, 
    ActivityIndicator
  } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import React,{useState, useEffect}from 'react';

import { MaterialIcons, FontAwesome  } from '@expo/vector-icons';
import { Minato } from '../assets';
import { fetchFeeds } from '../sanity';
import { useDispatch, useSelector } from 'react-redux';
import { SET_FEEDS } from '../context/actions/feedsActions';
import { Feeds } from '../components';

const HomeScreen = () => {
  const [searchTerm, setsearchTerm] = useState("");
  const [isLoading, setisLoading] = useState(false);

  const feeds = useSelector((state) => state.feeds );

  const [filtered, setfiltered] = useState(null);

  const dispatch = useDispatch();

  const handleSearchTerm = (text) =>{
    setsearchTerm(text);
    
    setfiltered(feeds?.feeds.filter(item => item.title.includes(text)));
  };

  useEffect(() => {
    setisLoading(true)
    try {
      fetchFeeds().then(res =>{
        // console.log(res);
        dispatch(SET_FEEDS(res));
        // console.log ("feed from store: " ,feeds?.feeds)
        setInterval(() => {
          setisLoading(false)
        }, 2000);
      });
      
    } catch (error) {
      console.log(error)  
      // setisLoading(false)
    }
  }, [dispatch])
  


  return (
    <SafeAreaView className= " flex-1 items-center justify-start bg-[#EBEAEF]">
      <View className=" w-full flex-row items-center justify-between px-4 py-2">
      <MaterialIcons name="chevron-left" size={32} color="#555" />

      <Image source={Minato} className=" w-12 h-12  rounded-full " resizeMode='cover' />
      </View>

      {/* search box */}
        <View className="flex-row items-center justify-between px-4 py-2 w-full space-x-5">
          <View className=" px-4 py-2 bg-white rounded-xl flex-1 flex-row items-center justify-center space-x-2">
             <MaterialIcons name="search" size={24} color="#7f7f7f" />
             <TextInput className=" text-base font-semibold text=[#555] flex-1 py-1 -mt-1"
              placeholder=" search here"
              value={searchTerm}
              onChangeText={handleSearchTerm}
              />
          </View > 

          <TouchableOpacity className=" bg-lime-600 w-12 h-12 rounded-xl items-center justify-center">
           <FontAwesome name="filter" size={24} color="#7f7f7f" />
          </TouchableOpacity>

        </View>

      {/* search box ends */}

    {/* scroll area */}
      <ScrollView className=" bg-[#EBEAEF] flex-1 w-full"> 
        {isLoading?(<View className=" flex-1 h-80 items-center justify-center"><ActivityIndicator size={"large"} color={"teal"}/></View>
        ) : (
        <Feeds feeds= {filtered || filtered?.length > 0 ? filtered : feeds?.feeds}/>
        ) }
        
      </ScrollView>


    {/* scroll area ends */}
    </SafeAreaView>
  )
};

export default HomeScreen;