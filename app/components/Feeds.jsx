import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import FeedDetail from './FeedDetail'

const Feeds = ({feedz}) => {
  return (
    <View className= " flex-row flex-wrap items-center justify-center">
      {feedz?.length > 0 ? ( 
      <>
        {feedz?.map((item, i) => (
          <FeedDetail key={i} data={item} />
        ))}
      </>
      )
      : (
        <View className= " w-full h-64 flex items-center justify-center">
           <ActivityIndicator size={"large"} color={"teal"}/>
          <Text>no data</Text>
        </View>)}
    </View>
  )
}

export default Feeds