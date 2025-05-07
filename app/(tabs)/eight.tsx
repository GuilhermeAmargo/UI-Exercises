import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function UserProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Imagem de Capa */}
      <View style={styles.coverContainer}>
        <Image
          source={{ uri: 'https://picsum.photos/400/200' }}
          style={styles.coverImage}
        />
        {/* Foto de Perfil */}
        <Image
          source={{ uri: 'https://thispersondoesnotexist.com/' }}
          style={styles.profileImage}
        />
      </View>

      {/* Nome e Bio */}
      <View style={styles.profileInfo}>
        <Text style={styles.name}>User</Text>
        <Text style={styles.bio}>Apaixonado por tecnologia e café ☕️</Text>
      </View>

      {/* Seções */}
      <View style={styles.sections}>
        <View style={styles.sectionItem}>
          <Text style={styles.sectionTitle}>Meus Posts</Text>
          <Text style={styles.sectionCount}>32</Text>
        </View>
        <View style={styles.sectionItem}>
          <Text style={styles.sectionTitle}>Seguidores</Text>
          <Text style={styles.sectionCount}>1480</Text>
        </View>
        <View style={styles.sectionItem}>
          <Text style={styles.sectionTitle}>Seguindo</Text>
          <Text style={styles.sectionCount}>210</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  coverContainer: {
    position: 'relative',
    width: '100%',
    height: 200,
  },
  coverImage: {
    width: '100%',
    height: '100%',
  },
  profileImage: {
    position: 'absolute',
    bottom: -50,
    left: '50%',
    transform: [{ translateX: -50 }],
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#fff',
    backgroundColor: '#ccc',
  },
  profileInfo: {
    marginTop: 60,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },
  bio: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 4,
  },
  sections: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
    paddingHorizontal: 20,
  },
  sectionItem: {
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  sectionCount: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 4,
  },
});