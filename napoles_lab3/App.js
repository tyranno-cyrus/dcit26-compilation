import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  Platform,
  StatusBar,
} from 'react-native';

export default function App() {
  const [enteredItem, setEnteredItem] = useState('');
  const [items, setItems] = useState([]);

  const addItemHandler = () => {
    const trimmed = enteredItem.trim();
    if (!trimmed) return;

    setItems((currentItems) => [
      ...currentItems,
      { id: `${Date.now()}-${Math.random()}`, text: trimmed },
    ]);
    setEnteredItem('');
  };

  return (
    <View style={styles.screen}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Item"
          placeholderTextColor="#8e9aaf"
          value={enteredItem}
          onChangeText={setEnteredItem}
          onSubmitEditing={addItemHandler}
        />
        <Button title="ADD" onPress={addItemHandler} color="#2196f3" />
      </View>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item, index }) => (
          <View style={styles.listItem}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{index + 1}</Text>
            </View>
            <Text style={styles.itemText}>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f4f6f9',
    paddingHorizontal: 24,
    paddingTop:
      Platform.OS === 'ios'
        ? 56
        : Platform.OS === 'android'
        ? (StatusBar.currentHeight || 24) + 16
        : 24,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 8,
  },
  textInput: {
    flex: 1,
    borderWidth: 1.5,
    borderColor: '#b0bec5',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    color: '#1e293b',
  },
  listContainer: {
    paddingBottom: 24,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#475569',
    borderLeftWidth: 5,
    borderLeftColor: '#38bdf8',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 2,
  },
  badge: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#38bdf8',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  badgeText: {
    color: '#0f172a',
    fontWeight: 'bold',
    fontSize: 12,
  },
  itemText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '500',
    flexShrink: 1,
  },
});