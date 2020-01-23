import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Picker,
  TouchableOpacity,
} from 'react-native';
import {ViroARSceneNavigator} from 'react-viro';
import {SocketProvider} from './context/provider';
import Game from './Game';
import Modal from 'react-native-modal';

const App = () => {
  const [isModalVisible, showModal] = React.useState(false);
  const toggleModal = React.useCallback(() => showModal(!isModalVisible), [
    isModalVisible,
    showModal,
  ]);

  return (
    <SocketProvider>
      <ViroARSceneNavigator initialScene={{scene: Game}} autofocus hdrEnabled />
      <Modal isVisible={isModalVisible}>
        <View style={styles.flex}>
          <View style={styles.inner}>
            <Text style={styles.title}>Create new sticker, alstublieft!</Text>
            <TextInput
              style={styles.textInput}
              multiline
              placeholder="Your message"
              placeholderTextColor="white"
            />
            <Picker
              style={styles.picker}
              itemStyle={styles.pickerItem}
              onValueChange={(itemValue, itemIndex) => {}}>
              <Picker.Item label="Green" value="green" />
              <Picker.Item label="Red" value="red" />
              <Picker.Item label="Yello" value="yellow" />
            </Picker>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity onPress={toggleModal} style={styles.modalButton}>
        <Text style={styles.buttonText}>Add Note</Text>
      </TouchableOpacity>
    </SocketProvider>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  inner: {
    backgroundColor: 'rgb(30,30,30)',
    padding: 16,
    maxWidth: 300,
    maxHeight: 600,
    borderRadius: 20,
  },
  title: {
    fontSize: 24,
    padding: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  textInput: {
    backgroundColor: 'rgb(45,45,45)',
    padding: 8,
    height: 80,
    borderRadius: 8,
    color: 'white',
    fontSize: 16,
    marginTop: 16,
  },
  picker: {},
  pickerItem: {
    color: 'white',
  },
  button: {
    backgroundColor: 'rgb(247,199,149)',
    borderRadius: 20,
    padding: 12,
    width: 100,
    alignSelf: 'center',
    shadowColor: 'rgba(250,250,250,1)',
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowRadius: 6,
    shadowOpacity: 0.3,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  modalButton: {
    backgroundColor: 'rgb(247,199,149)',
    borderRadius: 20,
    padding: 12,
    width: 100,
    alignSelf: 'center',
    shadowColor: 'rgba(250,250,250,1)',
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    position: 'absolute',
    right: 16,
    bottom: 16,
  },
});

export default App;
