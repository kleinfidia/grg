import {
    View,
    Text,
    Image, 
    TextInput,
    TouchableOpacity, 
    ScrollView, 
    ActivityIndicator
  } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React,{useState}from 'react'

import { MaterialIcons, FontAwesome  } from '@expo/vector-icons';
import { Minato } from '../assets';

const HomeScreen = () => {
  const [searchTerm, setsearchTerm] = useState("");
  const [isLoading, setisLoading] = useState(true)

  const handleSearchTerm = (text) =>{
    setsearchTerm(text);
  }


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

          <TouchableOpacity className=" bg-white w-12 h-12 rounded-xl items-center justify-center">
           <FontAwesome name="filter" size={24} color="#7f7f7f" />
          </TouchableOpacity>

        </View>

      {/* search box ends */}

    {/* scroll area */}
      <ScrollView className="flex-1 w-full  bg-red-500"> 
        {isLoading?<View className=" flex-1 h-80 items-center justify-center"><ActivityIndicator size={"large"} color={"teal"}/></View> : <></>}
      </ScrollView>


    {/* scroll area ends */}
    </SafeAreaView>
  )
}

export default HomeScreen