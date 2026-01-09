import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';

export default function SignupScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSignup = () => {
    if (!email || !password || !name) {
      Alert.alert('خطأ', 'برجاء ملء جميع البيانات');
      return;
    }
    // هنا مستقبلاً هنربط مع Firebase
    console.log('User Registered:', { name, email });
    Alert.alert('نجاح', 'تم إنشاء الحساب بنجاح');
    router.replace('/(auth)/login'); // نرجعه يسجل دخول
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>إنشاء حساب جديد</Text>
      
      <TextInput 
        placeholder="الاسم بالكامل" 
        style={styles.input} 
        onChangeText={setName}
      />
      <TextInput 
        placeholder="البريد الإلكتروني" 
        style={styles.input} 
        keyboardType="email-address"
        onChangeText={setEmail}
      />
      <TextInput 
        placeholder="كلمة المرور" 
        style={styles.input} 
        secureTextEntry 
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>تسجيل</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/(auth)/login')}>
        <Text style={styles.link}>عندك حساب بالفعل؟ سجل دخول</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 25, backgroundColor: '#fff' },
  title: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 40, color: '#2D3436' },
  input: { borderBottomWidth: 1.5, marginBottom: 25, padding: 12, borderColor: '#DFE6E9', fontSize: 16 },
  button: { backgroundColor: '#0984E3', padding: 15, borderRadius: 10, marginTop: 10 },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: 'bold', fontSize: 18 },
  link: { marginTop: 20, color: '#636E72', textAlign: 'center', fontSize: 14 }
});