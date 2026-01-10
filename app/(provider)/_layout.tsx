import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function ProviderLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#0984E3' }}>
      <Tabs.Screen 
        name="dashboard" 
        options={{ 
          title: 'الرئيسية',
          tabBarIcon: ({ color }) => <Ionicons name="stats-chart" size={24} color={color} />
        }} 
      />
      {/* شاشة إضافة جراج (مخفية من التابس) */}
      <Tabs.Screen name="add-garage" options={{ href: null }} />
    </Tabs>
  );
}