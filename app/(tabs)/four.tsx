import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

export default function TabTwoScreen() {
  const products = [
    { id: '1', name: 'Smartphone – iPhone 15 Pro Max', image: require('../../assets/images/Iphone15.webp'), price: 'R$6.500' },
    { id: '2', name: 'Notebook – Dell XPS 13 Plus', image: require('../../assets/images/notebook.avif'), price: 'R$8.000' },
    { id: '3', name: 'Smartwatch – Apple Watch Series 9', image: require('../../assets/images/smartwatch.avif'), price: 'R$3.000' },
    { id: '4', name: 'Fone Bluetooth – Sony WF-1000XM5', image: require('../../assets/images/fone.jpg'), price: 'R$1.200' },
    { id: '5', name: 'Monitor 4K – LG UltraFine 27UN850-W', image: require('../../assets/images/monitor.webp'), price: 'R$2.500' },
    { id: '6', name: 'Teclado Mecânico – Logitech G915 TKL', image: require('../../assets/images/teclado.png'), price: 'R$1.000' },
    { id: '7', name: 'Mouse Gamer – Razer DeathAdder V3 Pro', image: require('../../assets/images/mouse.webp'), price: 'R$700' },
    { id: '8', name: 'Tablet – Samsung Galaxy Tab S9 Ultra', image: require('../../assets/images/tablet.webp'), price: 'R$4.200' },
    { id: '9', name: 'Caixa de Som Bluetooth – JBL Charge 5', image: require('../../assets/images/caixadesom.webp'), price: 'R$800' },
    { id: '10', name: 'Câmera Digital – Canon EOS R6 Mark II', image: require('../../assets/images/camera.jpg'), price: 'R$12.000' }
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.name}</Text>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.itemText}>{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', 
    backgroundColor: '#f0f0f0',
    paddingTop: 50,
  },
  listContent: {
    paddingBottom: 30,
  },
  itemContainer: {
    width: 300, 
    backgroundColor: '#007AFF',
    padding: 15,
    marginVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#0051a8',
    alignItems: 'center',
  },
  itemText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  image: {
    width: 250,
    height: 180,
    borderRadius: 8,
    resizeMode: 'contain',
    backgroundColor: '#fff',
    marginBottom: 10,
  },
});