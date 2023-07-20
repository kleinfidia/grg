import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'

import Swiper from 'react-native-swiper'
import {Lego, Fun, cube_and_lego } from '../assets'
import { useNavigation } from '@react-navigation/native'

import AsyncStorage from '@react-native-async-storage/async-storage'; 

const OnBoardingScreen = () => {

    // loading on-loading screen once

    const navigation = useNavigation();
    useEffect(() => {
        const checkOnBoardingstatus = async () => {
            const value = await AsyncStorage.getItem("@boarding_complete");
            if (value !== null && value === "true"){
                navigation.replace("Home")
            }
        };
        checkOnBoardingstatus();
    
    }, [])
    

    const handleOnboardingComplete = async (e) => {
        if (e === 2){
            try {
                await AsyncStorage.setItem("@boarding_complete", "true");
                navigation.navigate("Home")
              } catch (error) {
                console.log ("error on loading status:" , error)
              }
            
            
        }
    }

  return (
    <View className=" flex-1 items-center justify-center bg-white">
      <Swiper onIndexChanged={handleOnboardingComplete}>
            <ScreenOne />
            <ScreenTwo />
            <ScreenThree />

      </Swiper>
    </View>
  )
}

// on-loading screens

export const ScreenOne = () => {
    return(
        <View className=" flex-1 items-center justify-center bg-white">
            <Image source={cube_and_lego}  className="w-full h-full" resizeMode='cover'/>
            <View className=" w-32 h-auto flex items-center justify-center p-2 absolute right-4 top-10">
                
                <Text className="flex  text-7xl font-extrabold text-white">grg fun zone</Text>
            </View>
        </View>
    )
}

export const ScreenTwo = () => {
    return(
        <View className=" flex-1 items-center justify-center bg-white">
            <Image source={Lego} className="w-full h-full"/>
            <View className=" w-56 h-auto flex items-center justify-center p-2 absolute right-4 bottom-2">
                <Text  className="flex  text-7xl font-extrabold text-white">find your best toy</Text>
            </View>

        </View>
    )
}

export const ScreenThree = () => {
    return(
        <View className=" flex-1 items-center justify-center bg-white">
            <Image source={Fun} className="w-full h-full pl-40"/>
            <View className=" w-40 h-auto flex items-center justify-center p-2 absolute right-4 bottom-2">
                <Text  className="flex  text-7xl font-extrabold text-red-200">keep the fun going
                </Text>
            </View>
        </View>
    )
}

export default OnBoardingScreen