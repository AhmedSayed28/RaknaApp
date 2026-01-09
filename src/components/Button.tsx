import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

type Props = {
  title: string
  onPress?: () => void
}

export const Button: React.FC<Props> = ({ title, onPress }) => (
  <TouchableOpacity onPress={onPress} style={{ padding: 12, backgroundColor: '#007AFF', borderRadius: 8 }}>
    <Text style={{ color: '#fff' }}>{title}</Text>
  </TouchableOpacity>
)
