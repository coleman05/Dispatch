import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image} from "react-native";
import tw from "tailwind-react-native-classnames";
import NavOptions from "./components/NavOptions";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_API_KEY } from "@env";
import Config from 'react-native-config';
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";

const apiKey = Config.GOOGLE_MAPS_API_KEY;


const HomeScreen = () => {
    const dispatch = useDispatch();
    return(
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                
                <Image 
                style={{
                    width:100,
                    height:100,
                    resizeMode:"contain",
                }}
                source={{
                    uri: "/Users/coleman/Dispatch/assets/Dispatch.png",
                }}
                />
                <GooglePlacesAutocomplete
                  placeholder="Where From"
                  styles={{
                    container: {flex:0,
                    },
                    textInput: {
                        fontSize:18,
                    },
                  }}
                  onPress={(data, details = null) => {
                    dispatch(
                        setOrigin({
                        location: details.geometry.location,
                        description: data.description
                    })
                    );
                    dispatch(setDestination(null));
                  }}
                  fetchDetails={true}
                  returnKeyType={'search'}
                  enablePoweredByContainer={false}
                  minLength={2}
                  query={{
                    key: apiKey, // Use apiKey instead of GOOGLE_MAPS_API_KEY
                    language: 'en'
                  }}
                  nearbyPlacesApi="GooglePlacesSearch"
                  debounce={400}
                />
                <NavOptions />
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    text: {
        color: "blue",
    },
});
