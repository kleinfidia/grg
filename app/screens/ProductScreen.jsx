import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const ProductScreen = ({route}) => {

    const { _id } = route.params;

    const feeds = useSelector((state) => state.feeds );
    const [data, setData] = useState(null);
    const [isLoading, setisLoading] = useState(false)

    useEffect( () => {
        setisLoading(true)
        if(feeds){
            setData("id data:",feeds?.feeds.filter(item =>item._id == _id)[0]);
            setInterval(() => {
                setisLoading(false)
            }, 3000);
        }
    }, [])

  return (
    <View className = " flex-1 items-start justify-start">
      <Text>ProductScreen</Text>
    </View>
  )
}

export default ProductScreen