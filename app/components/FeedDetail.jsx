import { View, Text, Dimensions, Image} from 'react-native'
import React from 'react'

const FeedDetail = ({data}) => {

    const screenWidth = Math.round(Dimensions.get("window").width);
    const cardWidth = screenWidth -20 ;
    // console.log(cardWidth);

  return (
    <View className = " p-4  m-2 rounded-xl flex items-center justify-center bg-white" 
          style={{width : cardWidth}}>
      <Image source={{uri: data?.mainImage?.asset?.url}} resizeMode='contain' className=" w-52 h-60"/>

      <View className="flex items-start justify-start space-y-1 w-full">
          <Text className=" text-xl font-semibold text-[#555]">
            {data?.title}
          </Text>
          <Text className=" text-base text-[#555]">
            {data?.description}
          </Text>
        <View className=" flex-row items-center justify-between space-y-1 w-full">
        <Text className=" text-base font-semibold text-[#555]">
           $ {data?.prize}
          </Text>
        </View>
      </View>
    </View>
  )
}

export default FeedDetail;