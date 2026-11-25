import 'react-native-gesture-handler';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
  const [products] = useState([
    {
      key: '1',
      title: 'Xbox',
      rating: '5/5',
      description: 'lorem ipsum',
    },
    {
      key: '2',
      title: 'PS5',
      rating: '5/5',
      description: 'Next-gen PlayStation console with ultra-fast SSD.',
    },
    {
      key: '3',
      title: 'Nintendo Switch',
      rating: '4.5/5',
      description: 'Hybrid handheld and home gaming console.',
    },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Product', item)}
          >
            <Text style={styles.cardText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

function ProductScreen({ route }) {
  const { key, title, rating, description } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.detailTitle}>{title}</Text>
      <Text style={styles.detailText}>{rating}</Text>
      <Text style={styles.detailText}>{description}</Text>
      <Text style={styles.detailKey}>Product Key: {key}</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Product" component={ProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 16,
  },
  card: {
    borderWidth: 1,
    borderColor: '#777777',
    backgroundColor: '#eeeeee',
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 15,
    color: '#222222',
  },
  detailTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222222',
    marginBottom: 4,
  },
  detailText: {
    fontSize: 15,
    color: '#333333',
    marginBottom: 4,
  },
  detailKey: {
    fontSize: 13,
    color: '#666666',
    marginTop: 4,
  },
});