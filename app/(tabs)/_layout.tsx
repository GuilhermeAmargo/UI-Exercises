import React from 'react';
import { Tabs } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import CustomTabBar from '@/components/CustomTabBar';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme === 'dark' ? 'dark' : 'light'];

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.tint,
        headerShown: useClientOnlyValue(false, true),
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tabs.Screen name="index" options={{ title: 'Exercício 1' }} />
      <Tabs.Screen name="two" options={{ title: 'Exercício 2' }} />
      <Tabs.Screen name="three" options={{ title: 'Exercício 3' }} />
      <Tabs.Screen name="four" options={{ title: 'Exercício 4' }} />
      <Tabs.Screen name="five" options={{ title: 'Exercício 5' }} />
      <Tabs.Screen name="six" options={{ title: 'Exercício 6' }} />
      <Tabs.Screen name="seven" options={{ title: 'Exercício 7' }} />
      <Tabs.Screen name="eight" options={{ title: 'Exercício 8' }} />
      <Tabs.Screen name="nine" options={{ title: 'Exercício 9' }} />
      <Tabs.Screen name="ten" options={{ title: 'Exercício 10' }} />
    </Tabs>
  );
}