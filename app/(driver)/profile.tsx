import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  const router = useRouter();

  const handleLogout = () => {
    // هنا مستقبلاً هنمسح الـ Token بتاع الـ Auth
    router.replace('/'); // يرجع للمدير (EntryPoint)
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Ionicons name="person" size={50} color="#fff" />
        </View>
        <Text style={styles.userName}>مستخدم تجريبي</Text>
      </View>

      <View style={styles.menu}>
        <TouchableOpacity 
            style={styles.menuItem} 
            onPress={() => router.push('/(driver)/settings')}
            >
            <Ionicons name="settings-outline" size={24} color="#2D3436" />
            <Text style={styles.menuText}>إعدادات الحساب</Text>
        </TouchableOpacity>                         

        <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={24} color="#FF7675" />
          <Text style={[styles.menuText, { color: '#FF7675' }]}>تسجيل الخروج</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9F9F9' },
  header: { backgroundColor: '#0984E3', padding: 40, alignItems: 'center' },
  avatar: { width: 80, height: 80, borderRadius: 40, backgroundColor: 'rgba(255,255,255,0.3)', justifyContent: 'center', alignItems: 'center', marginBottom: 10 },
  userName: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  menu: { marginTop: 20, paddingHorizontal: 20 },
  menuItem: { flexDirection: 'row', alignItems: 'center', padding: 15, backgroundColor: '#fff', borderRadius: 10, marginBottom: 10, gap: 15 },
  menuText: { fontSize: 16, color: '#2D3436' }
});