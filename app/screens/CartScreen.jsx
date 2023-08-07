import { View, Text, SafeAreaView, Image, ScrollView, FlatList, TextInput} from 'react-native';
import React, { useEffect , useState} from 'react';
import { TouchableOpacity } from 'react-native';
import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector} from "react-redux"
import { Emptycart } from '../assets';

import Swipeable from "react-native-gesture-handler/Swipeable";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { removeFromCart } from '../context/actions/cartActions';


const CartScreen = () => {

    const navigation = useNavigation();

    const [total, settotal] = useState(0);

    const cartItems = useSelector ((state) => state.cartItems);

    useEffect(() => {
      let mainTotal = 0;
      if(cartItems?.cart.length > 0 ) {
        cartItems.cart.map((item) => {
          console.log(item.data.price * item.qty)
          mainTotal += item.data.price * item.qty
          settotal(mainTotal)
        })
      }
    }, [cartItems.cart])

    console.log("cart items", cartItems.cart)

  return (
    
      <SafeAreaView className="flex-1 w-full items-start justify-start bg-[#EBEAEF] space-y-4">
        <GestureHandlerRootView>
        {/* top section */}
        <View className="flex-row items-center justify-between w-full px-4 py-6">
            <TouchableOpacity  onPress={() => navigation.goBack()}>
                <Entypo name="chevron-left" size={32} color={"#555"} />
            </TouchableOpacity> 

            <Text className="text-xl font-semibold text-[#555]">
            Shopping Bag
            </Text>
            <View className="w-10 h-10 rounded-xl bg-white flex items-center justify-center relative">
              <FontAwesome5 name="shopping-bag" size={16} color="black" />
              <View className="absolute w-4 h-4 bg-black top-0 right-0 rounded-md flex items-center justify-center">
                <Text className="text-white">{cartItems.cart.length}</Text>
              </View>
            </View>                 
        </View>

        { cartItems.cart.length === 0 || !cartItems ? (
        <View className =" flex-1 items-center justify-center p-4 w-full ">
            <Image source={Emptycart} className=" w-60 h-60"  resizeMode='contain'/>
        </View> ):
         (
          <ScrollView className=" w-full flex-1">
            <View className=" flex space-x-4">
              <FlatList 
              data={cartItems.cart} 
              keyExtractor={(item) => item.data._id} 
              renderItem={({ item }) => (<CartItemCard item={item.data}  qty= {item.qty}/>)}
              />
            </View>

                {/* promo code */}
                <View className=" w-full p-8">
                    <View className=" w-full px-2 h-16 rounded-xl bg-white flex-row items-center justify-center">
                      <TextInput placeholder='Promocode' className=" text-base px-4 font-semibold text-[#888] flex-1 py-1"/>
                      <TouchableOpacity className=" px-3 py-2 rounded-xl bg-black">
                        <Text className=" text-white text-lg">Apply</Text>
                      </TouchableOpacity>
                    </View>
                </View>

                {/* calculate total */}
                <View className=" px-8 w-full flex space-y-4" >
                  <View className=" flex-row items-center justify-between">
                     <Text className=" text-lg font-semibold text-[#555]">Subtotal</Text>
                     <View className=" flex-row items-center justify-between space-x-1">
                       <Text className=" text-xl font-semibold text-black">{parseFloat(total).toFixed(2)}</Text>
                       <Text className=" text-lg font-semibold text-[#555]">Ksh</Text>
                     </View>
                  </View>
                  <View className=" w-full h-[2px] bg-white"></View>

                  {/* shipping */}
                  <View className=" flex-row items-center justify-between">
                     <Text className=" text-lg font-semibold text-[#555]">Shipping cost</Text>
                     <View className=" flex-row items-center justify-between space-x-1">
                       <Text className=" text-xl font-semibold text-black"> 500</Text>
                       <Text className=" text-lg font-semibold text-[#555]">Ksh</Text>
                     </View>
                  </View>
                  <View className=" w-full h-[2px] bg-white"></View>

                  {/* grand total */}
                  <View className=" flex-row items-center justify-between">
                     <Text className=" text-lg font-semibold text-[#555]">Subtotal</Text>
                     <View className=" flex-row items-center justify-between space-x-1">
                     <Text className=" text-sm font-semibold text-[#555] mr-4">({cartItems.cart.length}) items</Text>
                       <Text className=" text-xl font-semibold text-black">{parseFloat(total + 500).toFixed(2)}</Text>
                       <Text className=" text-lg font-semibold text-[#555]">Ksh</Text>
                     </View>
                  </View>
                </View>

                <View className=" w-full px-8 my-4 ">
                  <TouchableOpacity className=" w-full p-2 rounded-xl bg-black flex items-center justify-center">
                    <Text className=" text-lg text-white font-semibold">Proceed to checkout</Text>
                  </TouchableOpacity>  
                </View>
                <View className=" w-full h-[60px]"></View>
            
          </ScrollView>
          
         ) }
     </GestureHandlerRootView>
    </SafeAreaView>
    
    
    
  )
};

const rightSwipeActions = () => {
  return (
    <View className=" h-full w-24 flex items-center justify-center bg-white">
      <TouchableOpacity>
        <FontAwesome5 name="trash" size={24} />
      </TouchableOpacity>
    </View>
  );
};

export const CartItemCard = ( {item, qty}) =>{
   
    const dispatch = useDispatch()

  const swipeFromRightOpen = (_id) => {
    dispatch(removeFromCart(_id))
  };

 return(
  <Swipeable 
     renderRightActions={rightSwipeActions}  
     onSwipeableRightOpen={() => swipeFromRightOpen(item._id)} >
  <View className="flex-row px-6 w-full items-center my-1">
    {/* image */}
    <View className=" bg-white rounded-xl flex items-center justify-center p-2 w-16 h-16 relative">
      <Image source={{uri: item?.bgImage?.asset?.url}} resizeMode='cover' className=" w-full h-full opacity-20"/>
          <View className=" inset-0 absolute  flex items-center justify-center ">
              <Image source={{uri: item?.mainImage?.asset?.url}} resizeMode='contain' className=" w-12 h-12 "/>
          </View>
            
    </View>

    {/* text  */}
    <View className=" flex items-center space-y-2 ml-3">
      <View className =" flex items-start justify-center ">
        <Text className=" text-lg font-semibold text-[#555]">{item?.title}</Text>
        <Text className=" text-sm font-semibold text-[#777]">{item?.shortDescription}</Text>
          {/* <View className=" flex-row items-center justify-center space-x-3">
          <Text>${item?.price * qty}</Text>
          <Text>(Qty :{ qty})</Text>
          </View> */}
          <Text className=" text-lg font-bold text-black ">${item?.price * qty}</Text>
      </View>
    </View>

    {/* quantity section */}
    <View className=" flex-row items-center justify-center space-x-4 rounded-xl border border-green-500 px-3 py-1 ml-auto">
        <Text className=" text-lg font-bold text-black ">Qty : { qty}</Text>
    </View>
  </View>
 </Swipeable>
 )
};

export default CartScreen;