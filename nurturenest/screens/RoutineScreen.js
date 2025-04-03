import React, { useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';

const routineItems = [
  { id: '1', title: 'Drink Water' },
  { id: '2', title: 'Stretch 5 mins' },
  { id: '3', title: 'Eat a healthy snack' },
];

export default function RoutineScreen() {
  const [completed, setCompleted] = useState([]);

  const toggleComplete = (id) => {
    setCompleted(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Today's Routine</Text>
      <FlatList
        data={routineItems}
        renderItem={({ item }) => (
          <Button
            title={`${completed.includes(item.id) ? '✅' : '⬜️'} ${item.title}`}
            onPress={() => toggleComplete(item.id)}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
