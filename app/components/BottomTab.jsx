import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
 
const BottomTab = ({ activeScreen }) => {

  const navigation = useNavigation();
  return (
    <View className=" absolute px-8 bottom-6 w-full">
      <View className=" w-full items-center justify-around px-4 py-2 flex-row rounded-xl bg-green-900">
        <TouchableOpacity>
          <FontAwesome  name='user' size={30} color='#5C5576'/>
        </TouchableOpacity>

        <TouchableOpacity>
          <MaterialIcons  name='format-list-bulleted' size={30} color='#5C5576'/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <FontAwesome  name='home' size={30} color={activeScreen === "Home" ? "#fff" : "#5C5576"}/>
        </TouchableOpacity>

        <TouchableOpacity>
          <MaterialIcons  name='collections' size={30} color='#5C5576'/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("CartScreen")}>
          <MaterialIcons  name='shopping-cart' size={30} color={activeScreen === "CartScreen" ? "#fff" : "#5C5576"}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default BottomTab;