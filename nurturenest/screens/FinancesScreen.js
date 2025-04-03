import React from 'react';
import { View, Text, FlatList } from 'react-native';

const benefitChecklist = [
  { id: '1', name: 'Apply for Paid Family Leave' },
  { id: '2', name: 'Check Breast Pump Coverage' },
  { id: '3', name: 'Claim Child Tax Credit' },
];

export default function FinanceScreen() {
  return (
    <View style={{ padding: 20 }}>
      <Text>Financial Support Checklist</Text>
      <FlatList
        data={benefitChecklist}
        renderItem={({ item }) => (
          <Text>• {item.name}</Text>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
