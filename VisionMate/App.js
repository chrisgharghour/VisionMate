import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import { StyleSheet, View, Pressable, TouchableOpacity, Text } from 'react-native';
import SimpleButton2 from '/Users/christopher.gharghour/Desktop/VisionMate/VisionMate/Components/Button.js';


export default function App() {
  return (
    <View style={styles.container}>
      {/* <SimpleButton title="Button 1"></SimpleButton> */}
      <SimpleButton2 title="Button 2"></SimpleButton2>
      <Text>Hello does this display</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const SimpleButton = ({ onPress, title }) => {
  return (
    <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    borderColor: "#000",
    borderWidth: 4,
    borderRadius: 18
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  // not actively using buttonIcon as we dont have one right now but optional to add
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#000',
    fontSize: 16,
  },
});