import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Platform,
  StatusBar,
} from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Student Profile</Text>

        <View style={styles.section}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.text}>Cyrus Napoles</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Age:</Text>
          <Text style={styles.text}>20</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Course/Year/Section:</Text>
          <Text style={styles.text}>BS Computer Science, 3rd Year, Section 4</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>About Me:</Text>
          <Text style={styles.text}>
            A curious 20-year-old Computer Science student who loves building
            mobile apps and turning ideas into clean, working interfaces. Outside
            of class, I enjoy UI prototyping and collaborating on campus tech
            projects.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Achievements:</Text>
          <Text style={styles.text}>- Dean&apos;s Lister (2025, 2026)</Text>
          <Text style={styles.text}>
            - 1st Runner-Up, Campus Mobile App Challenge (2025)
          </Text>
          <Text style={styles.text}>
            - Active Member, Computer Science Society (2024–2026)
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Skills:</Text>
          <Text style={styles.text}>- React Native &amp; Expo</Text>
          <Text style={styles.text}>- JavaScript &amp; TypeScript</Text>
          <Text style={styles.text}>- UI/UX Prototyping (Figma)</Text>
          <Text style={styles.text}>- Git &amp; GitHub</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingTop:
      Platform.OS === 'ios'
        ? 48
        : Platform.OS === 'android'
        ? StatusBar.currentHeight || 24
        : 16,
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#222222',
    marginBottom: 20,
  },
  section: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 4,
  },
  text: {
    fontSize: 14,
    color: '#333333',
    lineHeight: 20,
  },
});