import React from "react";
import { Button } from "react-native";
import * as Speech from "expo-speech";

const NativeSpeech = () => (
  <Button title="Speak!" onPress={() => Speech.speak("Hello World!")} />
);

export default NativeSpeech;
