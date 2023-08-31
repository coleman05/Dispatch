import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import MapView from 'react-native-maps';

const MapScreen = () => {
  return (
    <View>
      <View style={tw`h-1/2`}>
        <MapView style={styles.map} />
      </View>
      <View style={tw`h-1/2`}></View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
