import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useUser } from '@/src/context/UserRoleContext';

export default function EntryPoint() {
  const { role, setRole } = useUser();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>ركنة 🚗</Text>
      <Text style={styles.subtitle}>أسهل طريقة تركن بيها في مصر</Text>

      <View style={styles.roleContainer}>
        <Text style={styles.label}>اختر وضع التشغيل الحالي:</Text>
        <View style={styles.switchRow}>
          <TouchableOpacity 
            style={[styles.roleBtn, role === 'driver' && styles.activeRole]} 
            onPress={() => setRole('driver')}
          >
            <Text style={[styles.roleText, role === 'driver' && styles.activeText]}>سائق</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.roleBtn, role === 'provider' && styles.activeRole]} 
            onPress={() => setRole('provider')}
          >
            <Text style={[styles.roleText, role === 'provider' && styles.activeText]}>صاحب ركنة</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity 
          style={styles.mainBtn} 
          onPress={() => {
            if (role === 'driver') router.push('/home');
            else router.push('/dashboard');
          }}
        >
          <Text style={styles.mainBtnText}>دخول كـ {role === 'driver' ? 'سائق' : 'مؤجر'}</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.outlineBtn} 
          onPress={() => router.push('/login')}
        >
          <Text style={styles.outlineBtnText}>تسجيل الدخول / إنشاء حساب</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9F9F9', justifyContent: 'center', padding: 20 },
  logo: { fontSize: 48, fontWeight: '900', textAlign: 'center', color: '#0984E3' },
  subtitle: { fontSize: 16, textAlign: 'center', color: '#636E72', marginBottom: 50 },
  roleContainer: { marginBottom: 40 },
  label: { fontSize: 16, marginBottom: 15, textAlign: 'center', color: '#2D3436' },
  switchRow: { flexDirection: 'row', justifyContent: 'center', gap: 10 },
  roleBtn: { paddingVertical: 10, paddingHorizontal: 30, borderRadius: 20, borderWidth: 1, borderColor: '#0984E3' },
  activeRole: { backgroundColor: '#0984E3' },
  roleText: { color: '#0984E3', fontWeight: 'bold' },
  activeText: { color: '#fff' },
  actions: { gap: 15 },
  mainBtn: { backgroundColor: '#2D3436', padding: 18, borderRadius: 12 },
  mainBtnText: { color: '#fff', textAlign: 'center', fontSize: 18, fontWeight: 'bold' },
  outlineBtn: { padding: 15, borderRadius: 12, borderWidth: 1, borderColor: '#2D3436' },
  outlineBtnText: { color: '#2D3436', textAlign: 'center', fontSize: 16 }
});