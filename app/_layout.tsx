import { UserProvider } from '@/src/context/UserRoleContext';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <UserProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" /> 
      </Stack>
    </UserProvider>
  );
}