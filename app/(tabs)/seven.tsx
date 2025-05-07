import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, Pressable, Alert } from 'react-native';

const apps = [
  { id: '1', name: 'Email', icon: require('../../assets/images/mail.png') },
  { id: '2', name: 'Camera', icon: require('../../assets/images/camera.png') },
  { id: '3', name: 'Maps', icon: require('../../assets/images/placeholder.png') },
  { id: '4', name: 'Music', icon: require('../../assets/images/musical-note.png') },
  { id: '5', name: 'Photos', icon: require('../../assets/images/gallery.png') },
  { id: '6', name: 'Settings', icon: require('../../assets/images/setting.png') },
];

export default function TabTwoScreen() {
  const handlePress = (name: string) => {
    Alert.alert(`Você tocou em: ${name}`);
  };

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Meus aplicativos</Text>
        
      <FlatList
        data={apps}
        numColumns={3}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Pressable style={styles.button} onPress={() => handlePress(item.name)}>
              <Image source={item.icon} style={styles.icon} />
            </Pressable>
            <Text style={styles.text}>{item.name}</Text>
          </View>
        )}
        contentContainerStyle={styles.grid}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  grid: {
    alignItems: 'center',
  },
  item: {
    alignItems: 'center',
    margin: 10,
    width: 90,
  },
  button: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    width: 40,
    height: 40,
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
});