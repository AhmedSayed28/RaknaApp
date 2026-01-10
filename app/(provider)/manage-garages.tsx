import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Switch, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// 1. تعريف نوع البيانات للجراج (TypeScript)
interface Garage {
  id: string;
  name: string;
  price: string;
  address: string;
  available: boolean;
  from: string;
  to: string;
}

export default function ManageGarages() {
  const [garages, setGarages] = useState<Garage[]>([
    { id: '1', name: 'جراج الدقي الهادئ', price: '15', address: 'شارع التحرير', available: true, from: '08:00', to: '22:00' },
    { id: '2', name: 'ركنة المعادي', price: '20', address: 'شارع 9', available: false, from: '09:00', to: '23:00' },
  ]);

  const toggleAvailability = (id: string) => {
    setGarages(prevGarages => 
      prevGarages.map(g => 
        g.id === id ? { ...g, available: !g.available } : g
      )
    );
  };

  // 4. لوجيك الحذف
  const handleDelete = (id: string) => {
    Alert.alert("تأكيد الحذف", "هل أنت متأكد من حذف هذا الجراج نهائياً؟", [
      { text: "إلغاء", style: "cancel" },
      { text: "حذف", style: "destructive", onPress: () => {
        setGarages(prev => prev.filter(g => g.id !== id));
      }}
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>إدارة جراجاتي</Text>

      <FlatList
        data={garages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={styles.headerInfo}>
                <Text style={styles.garageName}>{item.name}</Text>
                <Text style={styles.garageInfo}>{item.address} - {item.price} ج.م/ساعة</Text>
              </View>
              <View style={styles.iconCircle}>
                <Ionicons name="car-sport" size={24} color="#0984E3" />
              </View>
            </View>

            <View style={styles.divider} />

            <View style={styles.statusRow}>
               <Switch 
                value={item.available} 
                onValueChange={() => toggleAvailability(item.id)}
                trackColor={{ false: "#767577", true: "#00B894" }}
                thumbColor={"#fff"}
              />
              <Text style={styles.statusLabel}>
                الحالة: <Text style={{ color: item.available ? '#00B894' : '#FF7675' }}>
                  {item.available ? 'متاح للركن' : 'مغلق حالياً'}
                </Text>
              </Text>
            </View>

            <View style={styles.timeSection}>
              <TouchableOpacity style={styles.timePicker}>
                <Text style={styles.timeLabel}>متاح من</Text>
                <View style={styles.timeValueRow}>
                  <Text style={styles.timeText}>{item.from}</Text>
                  <Ionicons name="time-outline" size={16} color="#0984E3" />
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.timePicker}>
                <Text style={styles.timeLabel}>متاح إلى</Text>
                <View style={styles.timeValueRow}>
                  <Text style={styles.timeText}>{item.to}</Text>
                  <Ionicons name="time-outline" size={16} color="#0984E3" />
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.actionsRow}>
              <TouchableOpacity style={styles.editBtn}>
                <Ionicons name="create-outline" size={18} color="#636E72" />
                <Text style={styles.editBtnText}>تعديل</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.deleteBtn} onPress={() => handleDelete(item.id)}>
                <Ionicons name="trash-outline" size={18} color="#FF7675" />
                <Text style={styles.deleteBtnText}>حذف الجراج</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>لا توجد جراجات مضافة بعد</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F0F2F5', padding: 15 },
  headerTitle: { fontSize: 26, fontWeight: '900', color: '#2D3436', textAlign: 'right', marginBottom: 20, marginTop: 30 },
  card: { backgroundColor: '#fff', borderRadius: 20, padding: 18, marginBottom: 15, elevation: 4, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4 },
  cardHeader: { flexDirection: 'row-reverse', justifyContent: 'space-between', alignItems: 'center' },
  headerInfo: { alignItems: 'flex-end' },
  garageName: { fontSize: 19, fontWeight: 'bold', color: '#2D3436' },
  garageInfo: { fontSize: 14, color: '#636E72', marginTop: 4 },
  iconCircle: { width: 45, height: 45, borderRadius: 22.5, backgroundColor: '#E1F0FF', justifyContent: 'center', alignItems: 'center' },
  divider: { height: 1, backgroundColor: '#F1F2F6', marginVertical: 15 },
  statusRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  statusLabel: { fontSize: 16, fontWeight: '700', color: '#2D3436' },
  timeSection: { flexDirection: 'row-reverse', justifyContent: 'space-between', marginTop: 15, gap: 10 },
  timePicker: { flex: 1, backgroundColor: '#F8F9FA', padding: 12, borderRadius: 12, alignItems: 'center', borderWidth: 1, borderColor: '#EDF2F7' },
  timeLabel: { fontSize: 12, color: '#718096', marginBottom: 5 },
  timeValueRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  timeText: { fontSize: 16, fontWeight: 'bold', color: '#2D3436' },
  actionsRow: { flexDirection: 'row-reverse', justifyContent: 'space-between', marginTop: 20, borderTopWidth: 1, borderTopColor: '#F1F2F6', paddingTop: 15 },
  editBtn: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  editBtnText: { color: '#636E72', fontWeight: '600' },
  deleteBtn: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  deleteBtnText: { color: '#FF7675', fontWeight: '600' },
  emptyText: { textAlign: 'center', marginTop: 50, color: '#B2BEC3', fontSize: 16 }
});