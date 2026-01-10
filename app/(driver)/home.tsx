import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import * as Location from 'expo-location';

const MOCK_PARKING_SPOTS = [
  { id: '1', title: 'ركنة الدقي الهادئة', price: 15, latitude: 30.0395, longitude: 31.2113 },
  { id: '2', title: 'جراج المعادي السريع', price: 20, latitude: 29.9602, longitude: 31.2569 },
  { id: '3', title: 'ركنة مدينة نصر - عباس العقاد', price: 10, latitude: 30.0595, longitude: 31.3450 },
];

export default function DriverHome() {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('للأسف، نحتاج إذن الوصول للموقع لتعمل الخريطة');
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
    })();
  }, []);

  if (!location) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0984E3" />
        <Text style={{ marginTop: 10 }}>جاري تحديد موقعك...</Text>
        {errorMsg && <Text style={{ color: 'red' }}>{errorMsg}</Text>}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.05, 
          longitudeDelta: 0.05,
        }}
        showsUserLocation={true} 
      >
        
        {MOCK_PARKING_SPOTS.map((spot) => (
          <Marker
            key={spot.id}
            coordinate={{ latitude: spot.latitude, longitude: spot.longitude }}
            pinColor="#0984E3"
          >
            <Callout>
              <View style={styles.callout}>
                <Text style={{ fontWeight: 'bold' }}>{spot.title}</Text>
                <Text>الساعة: {spot.price} جنيه</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { width: '100%', height: '100%' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  callout: { padding: 10, minWidth: 150 },
});