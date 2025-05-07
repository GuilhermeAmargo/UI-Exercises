import React from 'react';
import { ScrollView, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

const icons: Array<keyof typeof Ionicons.glyphMap> = [
  'home',
  'person',
  'radio-button-on',
  'pricetags',
  'log-in',
  'planet',
  'apps',
  'person-circle-outline',
  'newspaper-outline',
  'settings-outline',
];

export default function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;
          const { options } = descriptors[route.key];
          const iconName = icons[index];

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              onPress={() => navigation.navigate(route.name)}
              style={styles.tab}
            >
              <Ionicons name={iconName} size={24} color={isFocused ? '#007AFF' : '#999'} />
              <Text style={{ fontSize: 10, color: isFocused ? '#007AFF' : '#999' }}>
                {options.title || route.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderColor: '#eee',
    backgroundColor: 'white',
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});