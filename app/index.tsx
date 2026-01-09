import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useUser } from '@/src/context/UserRoleContext';

export default function Home() {
  const { role, setRole } = useUser();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>أهلاً بك في ركنة</Text>
      <Text>أنت الآن في وضع: **{role === 'driver' ? 'سائق' : 'صاحب ركنة'}**</Text>
      
      <Button 
        title="تبديل الوضع" 
        onPress={() => setRole(role === 'driver' ? 'provider' : 'driver')} 
      />

      <Button 
        title="دخول التطبيق" 
        onPress={() => {
            // هنا هنوجهه للفولدر المناسب
            // if(role === 'driver') router.push('/(driver)');
            // else router.push('/(provider)');
        }} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 }
});