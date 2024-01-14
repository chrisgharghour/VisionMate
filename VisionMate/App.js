import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Button from '/Users/missybridgwater/Developer/csProjects/hackathons/ideahacks2024/VisionMate/VisionMate/Components/Button.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Button theme="primary" label="Primary Button"></Button>
      <Button label="Default Button"></Button>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
