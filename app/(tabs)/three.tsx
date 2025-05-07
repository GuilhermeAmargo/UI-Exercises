import { View, Text, Image, StyleSheet, Pressable } from 'react-native';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.background}/>      
      <Pressable style={({ pressed }) => [
          styles.pressable,
          { opacity: pressed ? 0.5 : 1 }
        ]}>
        <Text style={styles.text}>Clique aqui</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgb(12, 233, 115)',
  },
  pressable: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(0, 30, 255)',
    padding: 10,
    borderRadius: 5,
    opacity: 1,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});