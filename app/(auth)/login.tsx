import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>تسجيل الدخول في ركنة</Text>
      
      <TextInput placeholder="البريد الإلكتروني" style={styles.input} />
      <TextInput placeholder="كلمة المرور" secureTextEntry style={styles.input} />

      <Button title="دخول" onPress={() => router.replace('/')} />
      
      <Text 
        style={styles.link} 
        onPress={() => router.push('/(auth)/signup')}
      >
        ماعندكش حساب؟ سجل دلوقتي
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 30 },
  input: { borderBottomWidth: 1, marginBottom: 20, padding: 10, borderColor: '#ccc' },
  link: { marginTop: 15, color: 'blue', textAlign: 'center' }
});