import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* Post 1 */}
        <View style={styles.containerFact}>
          <View style={styles.profileContainer}>
          <Ionicons name='notifications-outline' size={24} color='black' />
          <Text style={styles.text}>Notificações</Text>
          </View>
        </View>

        {/* Post 2 */}
        <View style={styles.containerFact}>
          <View style={styles.profileContainer}>
            <Ionicons name='lock-closed-outline' size={24} color='black' />
            <Text style={styles.text}>Privacidade</Text>
          </View>
        </View>

        {/* Post 3 */}
        <View style={styles.containerFact}>
          <View style={styles.profileContainer}>
            <Ionicons name='shield-checkmark-outline' size={24} color='black' />
            <Text style={styles.text}>Segurança</Text>
          </View>
        </View>

        {/* Post 4 */}
        <View style={styles.containerFact}>
          <View style={styles.profileContainer}>
            <Ionicons name='language-outline' size={24} color='black' />
            <Text style={styles.text}>Idioma</Text>
          </View>
        </View>

        {/* Post 5 */}
        <View style={styles.containerFact}>
          <View style={styles.profileContainer}>
            <Ionicons name='sunny-outline' size={24} color='black' />
            <Text style={styles.text}>Tema</Text>
          </View>
        </View>

        {/* Post 6 */}
        <View style={styles.containerFact}>
          <View style={styles.profileContainer}>
            <Ionicons name='person-circle-outline' size={24} color='black' />
            <Text style={styles.text}>Conta</Text>
          </View>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    backgroundColor: '#f5f5f5',
    alignSelf: 'center',
  },
  containerFact: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    marginLeft: 12,
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 24,
    alignSelf: 'center',
    borderRadius: 10,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#fff',
    backgroundColor: '#ccc',
    marginRight: 12,
  },
});