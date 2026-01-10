import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; 

export default function DriverLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#0984E3' }}>
      <Tabs.Screen 
        name="home" 
        options={{ 
          title: 'الخريطة',
          tabBarIcon: ({ color }) => <Ionicons name="map" size={24} color={color} />
        }} 
      />
      <Tabs.Screen 
        name="bookings"        options={{ 
          title: 'حجوزاتي',
          tabBarIcon: ({ color }) => <Ionicons name="list" size={24} color={color} />
        }} 
      />
    </Tabs>
  );
}