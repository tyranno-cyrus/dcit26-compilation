import 'react-native-gesture-handler';
import { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRandomUser = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('https://randomuser.me/api');
      const json = await response.json();
      setUser(json.results[0]);
    } catch (err) {
      setError('Failed to load user. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomUser();
  }, []);

  return (
    <View style={styles.homeContainer}>
      {loading ? (
        <ActivityIndicator size="large" color="#2196f3" style={styles.loader} />
      ) : error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : user ? (
        <>
          <TouchableOpacity
            onPress={() => navigation.navigate('Profile', { user })}
            activeOpacity={0.8}
          >
            <Image
              source={{ uri: user.picture.large }}
              style={styles.homeImage}
            />
          </TouchableOpacity>
          <Text style={styles.homeName}>
            {user.name.first} {user.name.last}
          </Text>
        </>
      ) : null}

      <View style={styles.buttonWrapper}>
        <Button
          title="RANDOM USER"
          color="#2196f3"
          onPress={fetchRandomUser}
          disabled={loading}
        />
      </View>
    </View>
  );
}

function ProfileScreen({ route }) {
  const { user } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.profileContainer}>
      <View style={styles.profileHeader}>
        <Image
          source={{ uri: user.picture.large }}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>
          {user.name.title} {user.name.first} {user.name.last}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.detailText}>Age: {user.dob.age}</Text>
        <Text style={styles.detailText}>Birthday: {user.dob.date}</Text>
        <Text style={styles.detailText}>Gender: {user.gender}</Text>
        <Text style={styles.detailText}>
          Address: {user.location.street.number} {user.location.street.name},{' '}
          {user.location.city}, {user.location.country}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact</Text>
        <Text style={styles.detailText}>Email: {user.email}</Text>
        <Text style={styles.detailText}>Phone: {user.phone}</Text>
        <Text style={styles.detailText}>Cell: {user.cell}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Other</Text>
        <Text style={styles.detailText}>
          Username: {user.login.username}
        </Text>
        <Text style={styles.detailText}>
          Nationality: {user.nat}
        </Text>
        <Text style={styles.detailText}>
          Date registered: {user.registered.date}
        </Text>
      </View>
    </ScrollView>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  loader: {
    marginBottom: 20,
  },
  errorText: {
    color: '#d32f2f',
    fontSize: 15,
    marginBottom: 16,
  },
  homeImage: {
    width: 180,
    height: 180,
    borderRadius: 6,
    marginBottom: 14,
  },
  homeName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222222',
    marginBottom: 16,
  },
  buttonWrapper: {
    marginTop: 4,
  },
  profileContainer: {
    flexGrow: 1,
    backgroundColor: '#f2f2f2',
    padding: 20,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 24,
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 6,
    marginBottom: 12,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222222',
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666666',
    borderBottomWidth: 1,
    borderBottomColor: '#d4d4d4',
    paddingBottom: 6,
    marginBottom: 8,
  },
  detailText: {
    fontSize: 14,
    color: '#222222',
    lineHeight: 22,
  },
});