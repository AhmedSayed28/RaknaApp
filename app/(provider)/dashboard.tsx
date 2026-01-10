import { Ionicons } from '@expo/vector-icons';
import { Label } from '@react-navigation/elements';
import { useRouter } from 'expo-router';
import React from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'

export default function ProviderDashboard() {
  const router = useRouter();

  const stats = [
    { id: '1', label: 'أرباح اليوم', value: '450 ج.م', icon: 'cash-outline', color: '#00B894' },
    { id: '2', label: 'حجوزات نشطة', value: '12', icon: 'time-outline', color: '#0984E3' },
  ];

  const recentBookings = [
    { id: '101', car: 'تويوتا كورولا (أ ط ج 123)', time: 'منذ 10 دقائق', price: '30 ج.م' },
    { id: '102', car: 'هيونداي إلنترا (ر ب د 456)', time: 'منذ ساعة', price: '50 ج.م' },
  ];
  return (
    <ScrollView style={styles.container}>
      {/* Header الترحيب */}
      <View style={styles.header}>
        <Text style={styles.welcomeText}>أهلاً بك يا شريكنا 👋</Text>
        <Text style={styles.subText}>إليك ملخص أداء جراجاتك اليوم</Text>
      </View>

      <View style={styles.statsRow}>
        {stats.map((item) => (
          <View key={item.id} style={styles.statCard}>
            <Ionicons name={item.icon as any} size={28} color={item.color} />
            <Text style={styles.statValue}>{item.value}</Text>
            <Text style={styles.statLabel}>{item.label}</Text>
          </View>
        ))}
      </View>
      <TouchableOpacity 
        style={styles.addGarageBtn}
        onPress={() => router.push('/(provider)/add-garage')}
      >
        <Ionicons name="add-circle-outline" size={24} color="#fff" />
        <Text style={styles.addGarageText}>إضافة جراج جديد</Text>
      </TouchableOpacity>

      {/* قائمة أحدث الحجوزات */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>أحدث الحركات</Text>
        <TouchableOpacity><Text style={styles.viewAll}>عرض الكل</Text></TouchableOpacity>
      </View>

      {recentBookings.map((booking) => (
        <View key={booking.id} style={styles.bookingCard}>
          <View style={styles.bookingInfo}>
            <Text style={styles.carName}>{booking.car}</Text>
            <Text style={styles.bookingTime}>{booking.time}</Text>
          </View>
          <Text style={styles.bookingPrice}>{booking.price}</Text>
        </View>
      ))}
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9F9F9', padding: 20 },
  header: { marginBottom: 25, marginTop: 20 },
  welcomeText: { fontSize: 24, fontWeight: 'bold', color: '#2D3436', textAlign: 'right' },
  subText: { fontSize: 14, color: '#636E72', textAlign: 'right', marginTop: 5 },
  statsRow: { flexDirection: 'row-reverse', justifyContent: 'space-between', marginBottom: 25 },
  statCard: { backgroundColor: '#fff', width: '48%', padding: 20, borderRadius: 15, alignItems: 'center', elevation: 3 },
  statValue: { fontSize: 20, fontWeight: 'bold', color: '#2D3436', marginTop: 10 },
  statLabel: { fontSize: 12, color: '#636E72', marginTop: 5 },
  addGarageBtn: { backgroundColor: '#0984E3', flexDirection: 'row-reverse', justifyContent: 'center', alignItems: 'center', padding: 15, borderRadius: 12, gap: 10, marginBottom: 30 },
  addGarageText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  sectionHeader: { flexDirection: 'row-reverse', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#2D3436' },
  viewAll: { color: '#0984E3', fontSize: 14 },
  bookingCard: { backgroundColor: '#fff', padding: 15, borderRadius: 12, flexDirection: 'row-reverse', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, borderRightWidth: 4, borderRightColor: '#00B894' },
  bookingInfo: { alignItems: 'flex-end' },
  carName: { fontSize: 15, fontWeight: '600', color: '#2D3436' },
  bookingTime: { fontSize: 12, color: '#B2BEC3', marginTop: 2 },
  bookingPrice: { fontSize: 16, fontWeight: 'bold', color: '#2D3436' },
});
