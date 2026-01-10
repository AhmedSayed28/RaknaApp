import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function ParkingDetails() {
  const router = useRouter();
  const params = useLocalSearchParams();
  
  // هل الشاشة دي فاتحة من "حجوزاتي"؟ (يعني عرض فقط)
  const isViewOnly = params.status !== undefined; 

  // تنظيف السعر (تحويله لرقم فقط بدون 'ج.م')
  const rawPrice = params.price ? parseInt(params.price.toString().replace(/[^0-9]/g, '')) : 15;
  
  const [hours, setHours] = useState(1);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imagePlaceholder}>
        <Ionicons name="car-sport" size={100} color="#fff" />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.title}>{params.title}</Text>
        <Text style={styles.price}>{rawPrice} جنيه / ساعة</Text>
        
        <View style={styles.divider} />

        {/* لو مش حجز قديم.. أظهر متحكم الساعات */}
        {!isViewOnly && (
          <>
            <Text style={styles.sectionTitle}>مدة الركن (بالساعات)</Text>
            <View style={styles.counterRow}>
              <TouchableOpacity onPress={() => setHours(Math.max(1, hours - 1))} style={styles.counterBtn}>
                <Ionicons name="remove" size={24} color="#0984E3" />
              </TouchableOpacity>
              <Text style={styles.counterText}>{hours}</Text>
              <TouchableOpacity onPress={() => setHours(hours + 1)} style={styles.counterBtn}>
                <Ionicons name="add" size={24} color="#0984E3" />
              </TouchableOpacity>
            </View>
          </>
        )}

        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>الإجمالي:</Text>
          <Text style={styles.totalPrice}>
            {/* لو عرض فقط، اعرض السعر اللي جاي جاهز من الحجوزات، لو حجز جديد اضرب السعر في الساعات */}
            {isViewOnly ? params.price : (rawPrice * hours) + " جنيه"}
          </Text>
        </View>

        {/* زرار التأكيد يظهر فقط في حالة الحجز الجديد */}
        {!isViewOnly ? (
          <TouchableOpacity style={styles.bookBtn} onPress={() => Alert.alert("تم الحجز")}>
            <Text style={styles.bookBtnText}>تأكيد الحجز الآن</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.bookedBadge}>
            <Text style={styles.bookedText}>هذا الحجز {params.status}</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  bookedBadge: { backgroundColor: '#F3F4F6', padding: 15, borderRadius: 10, alignItems: 'center' },
  bookedText: { color: '#636E72', fontWeight: 'bold' },
  imagePlaceholder: { height: 200, backgroundColor: '#0984E3', justifyContent: 'center', alignItems: 'center' },
  infoContainer: { padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#2D3436' },
  price: { fontSize: 18, color: '#0984E3', marginTop: 5 },
  divider: { height: 1, backgroundColor: '#DFE6E9', marginVertical: 20 },
  sectionTitle: { fontSize: 16, fontWeight: '600', marginBottom: 15 },
  counterRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 20, marginBottom: 30 },
  counterBtn: { borderWidth: 1, borderColor: '#0984E3', borderRadius: 10, padding: 10 },
  counterText: { fontSize: 20, fontWeight: 'bold' },
  totalRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30 },
  totalLabel: { fontSize: 18, color: '#636E72' },
  totalPrice: { fontSize: 22, fontWeight: 'bold', color: '#2D3436' },
  bookBtn: { backgroundColor: '#0984E3', padding: 18, borderRadius: 12 },
  bookBtnText: { color: '#fff', textAlign: 'center', fontSize: 18, fontWeight: 'bold' }
});