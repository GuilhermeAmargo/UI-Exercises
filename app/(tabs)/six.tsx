import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explorando o universo</Text>
      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.containerFact}>
        <Text style={styles.text}>
          Estima-se que o universo observável tenha cerca de 93 bilhões de anos-luz de diâmetro. Isso mesmo, mesmo com apenas 13,8 bilhões de anos de idade, a expansão do universo faz com que objetos muito distantes estejam ainda mais longe.
        </Text>
        <Image source={{ uri: 'https://placehold.co/300' }} style={styles.image} />
        </View>

        <View style={styles.containerFact}>
        <Text style={styles.text}>
          O universo está se expandindo desde o Big Bang, e essa expansão está acelerando, provavelmente por causa da energia escura, uma força misteriosa que compõe cerca de 68% do universo.
        </Text>
        <Image source={{ uri: 'https://placehold.co/300' }} style={styles.image} />
        </View>

        <View style={styles.containerFact}>
        <Text style={styles.text}>
          Apenas cerca de 5% do universo é matéria visível (como estrelas, planetas, etc.). 27% é matéria escura, que não emite luz nem energia, mas afeta a gravidade.
        </Text>  
        <Image source={{ uri: 'https://placehold.co/300' }} style={styles.image} />
        </View>

        <View style={styles.containerFact}>
        <Text style={styles.text}>
          Buracos negros não são buracos literalmente. Eles têm um campo gravitacional extremamente forte, mas se o Sol virasse um buraco negro do mesmo tamanho, a Terra continuaria orbitando normalmente — desde que à mesma distância.
        </Text>
        <Image source={{ uri: 'https://placehold.co/300' }} style={styles.image} />
        </View>

        <View style={styles.containerFact}>
        <Text style={styles.text}>
          O Sol, por exemplo, tem cerca de 4,6 bilhões de anos e deve viver por mais uns 5 bilhões antes de se tornar uma gigante vermelha e, depois, uma anã branca.
        </Text>
        <Image source={{ uri: 'https://placehold.co/300' }} style={styles.image} />
        </View>

        <View style={styles.containerFact}>
        <Text style={styles.text}>
          As flutuações de densidade do universo primitivo deixaram marcas que podem ser estudadas hoje como o “eco” do Big Bang, conhecido como radiação cósmica de fundo.
        </Text>
        <Image source={{ uri: 'https://placehold.co/300' }} style={styles.image} />
        </View>

        <View style={styles.containerFact}>
        <Text style={styles.text}>
          Algumas teorias sugerem que o nosso universo pode ser apenas um entre muitos outros — um conceito chamado multiverso.
        </Text>
        <Image source={{ uri: 'https://placehold.co/300' }} style={styles.image} />
        </View>

        <View style={styles.containerFact}>
        <Text style={styles.text}>
          Segundo a relatividade de Einstein, quanto mais forte o campo gravitacional, mais devagar o tempo passa. Isso foi provado por experimentos com relógios em altitudes diferentes.
        </Text>
        <Image source={{ uri: 'https://placehold.co/300' }} style={styles.image} />
        </View>

        <View style={styles.containerFact}>
        <Text style={styles.text}>
          O destino final do universo ainda é incerto. Algumas teorias incluem o “Big Freeze” (expansão eterna até esfriar tudo), o “Big Crunch” (colapso total), ou o “Big Rip” (dilaceramento do espaço-tempo por energia escura).
        </Text>
        <Image source={{ uri: 'https://placehold.co/300' }} style={styles.image} />
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
    alignItems: 'center',
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
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 24,
    alignSelf: 'center',
    borderRadius: 10,
  },
});