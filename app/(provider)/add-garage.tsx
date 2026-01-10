import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, Alert, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function AddGarage() {
  const router = useRouter();

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [address, setAddress] = useState('');
    const [loading, setLoading] = useState(false);

  const handleSave = () => {
     if(!name.trim() || !price.trim() || !address.trim()) {
        Alert.alert('خطأ', 'برجاء ملء جميع الحقول أولاً');  
        return;
     }

     setLoading(true);

     setTimeout(() => {
        setLoading(false);
      Alert.alert('تم بنجاح', 'تمت إضافة الجراج الخاص بك بنجاح', [
        { text: 'حسناً', onPress: () => router.back() } // ارجع للداشبورد بعد النجاح
      ]);
    }, 1500);
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={{ flex: 1 }}
    >
      <ScrollView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-forward" size={28} color="#2D3436" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>إضافة جراج جديد</Text>
        </View>

        <View style={styles.form}>
          {/* حقل اسم الجراج */}
          <Text style={styles.label}>اسم الجراج</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="business-outline" size={20} color="#B2BEC3" style={styles.icon} />
            <TextInput 
              placeholder="مثلاً: جراج الأمل" 
              style={styles.input}
              textAlign="right"
              value={name} // ربط القيمة بالـ State
              onChangeText={setName} // تحديث الـ State عند الكتابة
            />
          </View>

          {/* حقل السعر */}
          <Text style={styles.label}>السعر في الساعة (جنيه)</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="cash-outline" size={20} color="#B2BEC3" style={styles.icon} />
            <TextInput 
              placeholder="15" 
              keyboardType="numeric"
              style={styles.input}
              textAlign="right"
              value={price}
              onChangeText={setPrice}
            />
          </View>

          {/* حقل العنوان */}
          <Text style={styles.label}>العنوان بالتفصيل</Text>
          <View style={[styles.inputContainer, { alignItems: 'flex-start', height: 100 }]}>
            <Ionicons name="location-outline" size={20} color="#B2BEC3" style={[styles.icon, { marginTop: 10 }]} />
            <TextInput 
              placeholder="شارع التحرير، الدقي، الجيزة" 
              multiline
              numberOfLines={4}
              style={[styles.input, { height: 80, textAlignVertical: 'top' }]}
              textAlign="right"
              value={address}
              onChangeText={setAddress}
            />
          </View>

          {/* زرار الحفظ مع حالة التحميل */}
          <TouchableOpacity 
            style={[styles.submitBtn, loading && { opacity: 0.7 }]} 
            onPress={handleSave}
            disabled={loading} // منع الضغط المتكرر أثناء التحميل
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.submitBtnText}>حفظ البيانات ونشر الجراج</Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  header: { flexDirection: 'row-reverse', alignItems: 'center', gap: 15, marginTop: 40, marginBottom: 30 },
  headerTitle: { fontSize: 22, fontWeight: 'bold', color: '#2D3436' },
  form: { gap: 20 },
  label: { fontSize: 16, fontWeight: '600', color: '#2D3436', textAlign: 'right', marginBottom: -10 },
  inputContainer: { 
    flexDirection: 'row-reverse', 
    alignItems: 'center', 
    backgroundColor: '#F9F9F9', 
    borderRadius: 12, 
    borderWidth: 1, 
    borderColor: '#DFE6E9',
    paddingHorizontal: 15
  },
  icon: { marginLeft: 10 },
  input: { flex: 1, paddingVertical: 15, fontSize: 16, color: '#2D3436' },
  submitBtn: { backgroundColor: '#0984E3', padding: 18, borderRadius: 12, marginTop: 20 },
  submitBtnText: { color: '#fff', textAlign: 'center', fontSize: 18, fontWeight: 'bold' }
});