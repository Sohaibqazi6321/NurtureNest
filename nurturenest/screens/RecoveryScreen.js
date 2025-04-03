import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { db } from '../firebaseConfig';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

export default function RecoveryScreen() {
  const [pain, setPain] = useState('');
  const [energy, setEnergy] = useState('');

  const handleSave = async () => {
    await addDoc(collection(db, 'recoveryLogs'), {
      pain,
      energy,
      timestamp: Timestamp.now()
    });
    alert('Recovery data saved!');
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Pain Level (1-10)</Text>
      <TextInput value={pain} onChangeText={setPain} keyboardType="numeric" />
      <Text>Energy Level (1-10)</Text>
      <TextInput value={energy} onChangeText={setEnergy} keyboardType="numeric" />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
}
