import { Stack } from 'expo-router';
import { UserProvider } from '@/src/context/UserRoleContext'; 

export default function RootLayout() {
  return (
    <UserProvider>
      
      <Stack screenOptions={{ headerShown: false }}>
        
        <Stack.Screen name="index" /> 
        
        <Stack.Screen name="(driver)" />
        
        <Stack.Screen name="(provider)" />
        
      </Stack>

    </UserProvider>
  );
}