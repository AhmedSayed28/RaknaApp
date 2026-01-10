import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// بيانات وهمية للحجوزات
const MOCK_BOOKINGS = [
  { id: '1', place: 'جراج الدقي الهادئ', date: '2023-10-25', status: 'مكتمل', price: '45 ج.م' },
  { id: '2', place: 'ركنة المعادي - شارع 9', date: '2023-10-28', status: 'قيد الانتظار', price: '30 ج.م' },
];

export default function BookingsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={MOCK_BOOKINGS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.placeName}>{item.place}</Text>
              <View style={[styles.statusBadge, { backgroundColor: item.status === 'مكتمل' ? '#D1FAE5' : '#FEF3C7' }]}>
                <Text style={{ color: item.status === 'مكتمل' ? '#059669' : '#D97706', fontSize: 12 }}>{item.status}</Text>
              </View>
            </View>
            
            <View style={styles.cardBody}>
              <Text style={styles.infoText}><Ionicons name="calendar-outline" /> {item.date}</Text>
              <Text style={styles.priceText}>{item.price}</Text>
            </View>

            <TouchableOpacity style={styles.detailsBtn}>
              <Text style={styles.detailsBtnText}>عرض التفاصيل</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3F4F6', padding: 15 },
  card: { backgroundColor: '#fff', borderRadius: 12, padding: 15, marginBottom: 15, elevation: 2 },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  placeName: { fontSize: 18, fontWeight: 'bold', color: '#1F2937' },
  statusBadge: { paddingHorizontal: 8, paddingVertical: 4, borderRadius: 20 },
  cardBody: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 },
  infoText: { color: '#6B7280' },
  priceText: { fontWeight: 'bold', color: '#0984E3' },
  detailsBtn: { borderTopWidth: 1, borderTopColor: '#F3F4F6', paddingTop: 10 },
  detailsBtnText: { color: '#0984E3', textAlign: 'center', fontWeight: '600' }
});