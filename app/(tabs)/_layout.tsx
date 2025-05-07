import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
  screenOptions={{
    tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
    headerShown: useClientOnlyValue(false, true),
  }}>
  <Tabs.Screen
    name="index"
    options={{
      title: 'Exercício 1',
      headerTitle: 'Exercício 1',
    }}
  />
  <Tabs.Screen
    name="two"
    options={{
      title: 'Exercício 2',
      headerTitle: 'Exercício 2',
    }}
  />
  <Tabs.Screen
    name="three"
    options={{
      title: 'Exercício 3',
      headerTitle: 'Exercício 3',
    }}
  />
  <Tabs.Screen
    name="four"
    options={{
      title: 'Exercício 4',
      headerTitle: 'Exercício 4',
    }}
    />
    <Tabs.Screen
    name="five"
    options={{
      title: 'Exercício 5',
      headerTitle: 'Exercício 5',
    }}
    />
    <Tabs.Screen
    name="six"
    options={{
      title: 'Exercício 6',
      headerTitle: 'Exercício 6',
    }}
    />
  </Tabs>
  );
}
