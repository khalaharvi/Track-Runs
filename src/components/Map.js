import React from 'react';
import { Text, StyleSheet} from 'react-native';
import TrackCreateScreen from '../screens/TrackCreateScreen';
import MapView, {Polyline } from 'react-native-maps';


const Map = () => {
  return <MapView  
    style={styles.map}
    initialRegion={{
      latidude: 37.33233,
      longitude: -122.03121,
      latidudeDelta: 0.01,
      longitudeDelta: 0.01,
    }}
  />;
};

const styles = StyleSheet.create({
  map: {
    height: 300
  }
});

export default Map;