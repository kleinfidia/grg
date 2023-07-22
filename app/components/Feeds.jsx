import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

const Feeds = ({feeds}) => {
  return (
    <View className= " flex-row flex-wrap items-center justify-center">
      {feeds?.length > 0 ? 
      <>
        {feeds?.length}
      </>
      : 
      <View className="w-full h-64 flex items-center justify-center">
      <ActivityIndicator size={"large"} color={"teal"}/>
      <Text>no data</Text>
        </View>}
    </View>
  )
}

export default Feeds