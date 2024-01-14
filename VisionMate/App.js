import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import { StyleSheet, View, Pressable, TouchableOpacity, Text } from 'react-native';
// import NativeSpeech from '/Users/missybridgwater/Developer/csProjects/hackathons/ideahacks2024/VisionMate/VisionMate/Components/Voice.js';
import { BleManager } from "react-native-ble-plx";
import { useState, useEffect, useRef } from 'react';
// import SimpleButton2 from '/Users/christopher.gharghour/Desktop/VisionMate/VisionMate/Components/Button.js';

// import SimpleButton from '/Users/missybridgwater/Developer/csProjects/hackathons/ideahacks2024/VisionMate/VisionMate/Components/Button.js';
import Double from './Components/Double.js';

const bleManager = new BleManager();
export default function App() {
  const [deviceID, setDeviceID] = useState(null);
  const [powerOn, setPowerOn] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState("Searching...");

  const deviceRef = useRef(null);

  return (
    <View style={styles.container}>
      {/* <SimpleButton theme="primary" label="Primary Button"></SimpleButton>
      <SimpleButton label="Default Button"></SimpleButton> */}
      <Double backGrdColor={"#2fd33d"} h={90}></Double>
      <Text>{"\n"}</Text>
      <Double backGrdColor={"#ffd33d"} h={240}></Double>
      {/* <br/> */}
      <Text>{"\n"}</Text>
      <Double backGrdColor={"#0000ff"} h={240}></Double>
      <StatusBar style="auto" />
    </View>
  );
}

// const SimpleButton = ({ onPress, title }) => {
//   return (
//     <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
//       <Text style={styles.buttonText}>{title}</Text>
//     </Pressable>
//   );
// };

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