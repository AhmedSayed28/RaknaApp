import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SettingsScreen() {
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>تفضيلات التطبيق</Text>
      
      <View style={styles.settingRow}>
        <View style={styles.leftSide}>
          <Ionicons name="notifications-outline" size={24} color="#2D3436" />
          <Text style={styles.settingLabel}>التنبيهات</Text>
        </View>
        <Switch 
          value={isNotificationsEnabled} 
          onValueChange={setIsNotificationsEnabled}
          trackColor={{ false: "#767577", true: "#0984E3" }}
        />
      </View>

      <TouchableOpacity style={styles.settingRow}>
        <View style={styles.leftSide}>
          <Ionicons name="language-outline" size={24} color="#2D3436" />
          <Text style={styles.settingLabel}>اللغة</Text>
        </View>
        <Text style={styles.valueText}>العربية</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.settingRow}>
        <View style={styles.leftSide}>
          <Ionicons name="shield-checkmark-outline" size={24} color="#2D3436" />
          <Text style={styles.settingLabel}>سياسة الخصوصية</Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color="#B2BEC3" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9F9F9', padding: 20 },
  sectionTitle: { fontSize: 14, color: '#636E72', marginBottom: 20, fontWeight: 'bold' },
  settingRow: { 
    flexDirection: 'row-reverse', // عشان الكلام يبقى عربي صح من اليمين
    justifyContent: 'space-between', 
    alignItems: 'center', 
    backgroundColor: '#fff', 
    padding: 15, 
    borderRadius: 12, 
    marginBottom: 10 
  },
  leftSide: { flexDirection: 'row-reverse', alignItems: 'center', gap: 15 },
  settingLabel: { fontSize: 16, color: '#2D3436' },
  valueText: { color: '#0984E3', fontWeight: 'bold' }
});