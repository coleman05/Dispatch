import { Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from "tailwind-react-native-classnames";
import { Icon } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';
import Config from 'react-native-config';
import {GOOGLE_MAPS_API_KEY} from '@env'

//const apiKey = Config.GOOGLE_MAPS_API_KEY;

console.log(GOOGLE_MAPS_API_KEY)


const data = [
    {
        id: "123",
        title: "Get a driver",
        image: "/Users/coleman/Dispatch/assets/undraw_on_the_way_re_swjt.png",
        screen: "MapScreen",
    }
]

const NavOptions = () => {
    const navigation = useNavigation();

  return (
    <FlatList 
    data={data} 
    keyExtractor={(item) => item.id}
    horizontal
    renderItem ={({item}) => (
        <TouchableOpacity
         onPress={() => navigation.navigate(item.screen)}
         style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
           <View>
            <Image 
            style={{width:120, height:120, resizeMode:"contain"}}
            source=
            {{uri: item.image}} />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon 
            style={tw`p-2 bg-black rounded-full w-10 mt-4`}
            name="arrowright" color="white" type="antdesign" />
           </View>
        </TouchableOpacity>
    )}
    />
  )
}

export default NavOptions

