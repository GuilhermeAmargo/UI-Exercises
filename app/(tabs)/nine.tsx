import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Feed</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* Post 1 */}
        <View style={styles.containerFact}>
          <View style={styles.profileContainer}>
            <Image source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }} style={styles.profileImage} />
            <Text style={styles.text}>Lucas Silva</Text>
          </View>
          <Image source={{ uri: 'https://picsum.photos/300/200?random=1' }} style={styles.image} />
          <Text style={styles.text}>Comecei a semana com uma caminhada no parque. O clima estava perfeito e a paisagem incrível!</Text>
        </View>

        {/* Post 2 */}
        <View style={styles.containerFact}>
          <View style={styles.profileContainer}>
            <Image source={{ uri: 'https://randomuser.me/api/portraits/women/2.jpg' }} style={styles.profileImage} />
            <Text style={styles.text}>Mariana Costa</Text>
          </View>
          <Image source={{ uri: 'https://picsum.photos/300/200?random=2' }} style={styles.image} />
          <Text style={styles.text}>Final de tarde maravilhoso com esse pôr do sol. Momentos assim recarregam a alma!</Text>
        </View>

        {/* Post 3 */}
        <View style={styles.containerFact}>
          <View style={styles.profileContainer}>
            <Image source={{ uri: 'https://randomuser.me/api/portraits/men/3.jpg' }} style={styles.profileImage} />
            <Text style={styles.text}>Ricardo Mendes</Text>
          </View>
          <Image source={{ uri: 'https://picsum.photos/300/200?random=3' }} style={styles.image} />
          <Text style={styles.text}>Hoje foi dia de explorar trilhas! Natureza, aventura e um pouco de lama. Valeu cada segundo.</Text>
        </View>

        {/* Post 4 */}
        <View style={styles.containerFact}>
          <View style={styles.profileContainer}>
            <Image source={{ uri: 'https://randomuser.me/api/portraits/women/4.jpg' }} style={styles.profileImage} />
            <Text style={styles.text}>Camila Andrade</Text>
          </View>
          <Image source={{ uri: 'https://picsum.photos/300/200?random=4' }} style={styles.image} />
          <Text style={styles.text}>Essa cafeteria virou meu cantinho favorito da cidade. Ambiente acolhedor e café delicioso!</Text>
        </View>

        {/* Post 5 */}
        <View style={styles.containerFact}>
          <View style={styles.profileContainer}>
            <Image source={{ uri: 'https://randomuser.me/api/portraits/men/5.jpg' }} style={styles.profileImage} />
            <Text style={styles.text}>Thiago Rocha</Text>
          </View>
          <Image source={{ uri: 'https://picsum.photos/300/200?random=5' }} style={styles.image} />
          <Text style={styles.text}>Partiu aventura! Esse lugar superou todas as minhas expectativas. Recomendo muito!</Text>
        </View>

        {/* Post 6 */}
        <View style={styles.containerFact}>
          <View style={styles.profileContainer}>
            <Image source={{ uri: 'https://randomuser.me/api/portraits/women/6.jpg' }} style={styles.profileImage} />
            <Text style={styles.text}>Juliana Freitas</Text>
          </View>
          <Image source={{ uri: 'https://picsum.photos/300/200?random=6' }} style={styles.image} />
          <Text style={styles.text}>Descobri essa paisagem incrível durante uma viagem inesperada. A vida é cheia de surpresas boas!</Text>
        </View>

        {/* Post 7 */}
        <View style={styles.containerFact}>
          <View style={styles.profileContainer}>
            <Image source={{ uri: 'https://randomuser.me/api/portraits/men/7.jpg' }} style={styles.profileImage} />
            <Text style={styles.text}>Felipe Martins</Text>
          </View>
          <Image source={{ uri: 'https://picsum.photos/300/200?random=7' }} style={styles.image} />
          <Text style={styles.text}>Nada como um dia de descanso longe da cidade. Só o som da natureza e a brisa suave.</Text>
        </View>

        {/* Post 8 */}
        <View style={styles.containerFact}>
          <View style={styles.profileContainer}>
            <Image source={{ uri: 'https://randomuser.me/api/portraits/men/8.jpg' }} style={styles.profileImage} />
            <Text style={styles.text}>Bruno Teixeira</Text>
          </View>
          <Image source={{ uri: 'https://picsum.photos/300/200?random=8' }} style={styles.image} />
          <Text style={styles.text}>Essa vista me deixou sem palavras. O mundo é realmente um lugar maravilhoso pra se viver.</Text>
        </View>

        {/* Post 9 */}
        <View style={styles.containerFact}>
          <View style={styles.profileContainer}>
            <Image source={{ uri: 'https://randomuser.me/api/portraits/women/9.jpg' }} style={styles.profileImage} />
            <Text style={styles.text}>Fernanda Lima</Text>
          </View>
          <Image source={{ uri: 'https://picsum.photos/300/200?random=9' }} style={styles.image} />
          <Text style={styles.text}>Sábado de relax e bons momentos com amigos. Gratidão define!</Text>
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
    marginBottom: 12,
    textAlign: 'justify',
    flex: 1,
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