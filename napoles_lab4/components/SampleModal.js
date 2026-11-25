import {
  Modal,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  Platform,
  StatusBar,
} from 'react-native';

export default function SampleModal({ visible, onClose }) {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
        >
          <Text style={styles.bodyText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper
            eget duis at tellus at urna condimentum mattis pellentesque. Ut
            diam quam nulla porttitor massa id neque. Natoque penatibus et
            magnis dis parturient montes nascetur ridiculus mus. Condimentum
            mattis pellentesque id nibh tortor id aliquet lectus.
          </Text>
          <Text style={styles.bodyText}>
            Sed adipiscing diam donec adipiscing tristique risus nec feugiat in.
            Tortor aliquam nulla facilisi cras fermentum. Nibh nisl condimentum
            id venenatis. Id aliquet risus feugiat in. Suspendisse in est ante
            in nibh mauris. Auctor elit sed vulputate mi sit amet mauris commodo
            quis. Pulvinar mattis nunc sed blandit libero volutpat sed cras
            ornare.
          </Text>
          <Text style={styles.bodyText}>
            Quam elementum pulvinar etiam non quam. Sed augue lacus viverra
            vitae congue eu. Enim neque volutpat ac tincidunt vitae semper quis.
            Pretium fusce id velit ut tortor pretium. Rhoncus dolor purus non
            enim praesent elementum facilisis leo. Scelerisque mauris
            pellentesque pulvinar pellentesque habitant.
          </Text>
          <Text style={styles.bodyText}>
            Pellentesque elit eget gravida cum sociis natoque penatibus.
            Tincidunt lobortis feugiat vivamus at augue eget arcu dictum.
            Cursus risus at ultrices mi tempus imperdiet nulla malesuada
            pellentesque. Egestas fringilla phasellus faucibus scelerisque
            eleifend donec pretium vulputate sapien.
          </Text>
        </ScrollView>

        <View style={styles.buttonContainer}>
          <Button title="CLOSE" color="#e53935" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingTop:
      Platform.OS === 'ios'
        ? 54
        : Platform.OS === 'android'
        ? (StatusBar.currentHeight || 24) + 12
        : 20,
    paddingBottom: Platform.OS === 'ios' ? 32 : 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 16,
  },
  scrollView: {
    flex: 1,
    marginBottom: 16,
  },
  scrollContent: {
    paddingVertical: 4,
  },
  bodyText: {
    fontSize: 15,
    lineHeight: 22,
    color: '#222222',
    marginBottom: 14,
    textAlign: 'justify',
  },
  buttonContainer: {
    alignItems: 'center',
  },
});