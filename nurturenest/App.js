import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import RecoveryScreen from './screens/RecoveryScreen';
import RoutineScreen from './screens/RoutineScreen';
import FinancesScreen from './screens/FinancesScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Recovery" component={RecoveryScreen} />
        <Tab.Screen name="Routine" component={RoutineScreen} />
        <Tab.Screen name="Finances" component={FinancesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
