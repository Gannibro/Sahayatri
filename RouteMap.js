// RouteMap.js
import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';

const RouteMap = ({ destination }) => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [routeCoordinates, setRouteCoordinates] = useState([]);

  useEffect(() => {
    getCurrentLocation();
  }, []);

  useEffect(() => {
    if (currentLocation && destination) {
      calculateRoute();
    }
  }, [currentLocation, destination]);

  const getCurrentLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setCurrentLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    } catch (error) {
      console.error('Error getting current location:', error);
    }
  };

  const calculateRoute = async () => {
    const apiKey = 'API_KEY'; 
    const apiUrl = 'API_URL';
    
    try {
      const response = await fetch(`${apiUrl}?api_key=${apiKey}&start=${currentLocation.longitude},${currentLocation.latitude}&end=${destination.longitude},${destination.latitude}`);
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      
      if (data.features && data.features.length > 0) {
        const routeGeometry = data.features[0].geometry.coordinates;
        const newRouteCoordinates = routeGeometry.map(coord => ({
          longitude: coord[0],
          latitude: coord[1]
        }));
        setRouteCoordinates(newRouteCoordinates);
      } else {
        console.error('No route found');
        fallbackToStraightLine();
      }
    } catch (error) {
      console.error('Error calculating route:', error);
      fallbackToStraightLine();
    }
  };

  const fallbackToStraightLine = () => {
    const newRouteCoordinates = [
      currentLocation,
      { latitude: destination.latitude, longitude: destination.longitude },
    ];
    setRouteCoordinates(newRouteCoordinates);
  };

  if (!currentLocation) {
    return null;
  }

  return (
    <MapView
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        ...currentLocation,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <Marker
        coordinate={currentLocation}
        title="Current Location"
        pinColor="blue"
      />
      
      {destination && (
        <Marker
          coordinate={{
            latitude: destination.latitude,
            longitude: destination.longitude,
          }}
          title={destination.name}
          pinColor="red"
        />
      )}
      {routeCoordinates.length > 0 && (
        <Polyline
          coordinates={routeCoordinates}
          strokeColor="#8DBA76"
          strokeWidth={3}
        />
      )}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default RouteMap;