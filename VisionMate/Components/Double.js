// import React from "react";
// import { Button, DoubleClick } from "react-native";

// import { View, StyleSheet } from "react-native";
// import { Gesture, GestureDetector } from "react-native-gesture-handler";
// import { DoubleClick } from "react-native-double-tap";

import { useEffect, useState } from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import * as Speech from "expo-speech";
// const Double = () => (
//   <View style={styles.container}>
//     <DoubleClick
//       singleTap={() => {
//         console.log("single tap");
//       }}
//       doubleTap={() => {
//         console.log("double tap");
//       }}
//       delay={200}
//     >
//       <Text>Open up App.js to start working on your app!</Text>
//       <Text>Changes you make will automatically reload.</Text>
//       <Text>Shake your phone to open the developer menu.</Text>
//     </DoubleClick>
//   </View>
// );

// export default Double;

let timer = null;
const TIMEOUT = 400;
const debounce = (onSingle, onDouble) => {
  if (timer) {
    clearTimeout(timer);
    timer = null;
    onDouble();
    Speech.speak("double tap");
  } else {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      onSingle();
      Speech.speak("single tap");
    }, TIMEOUT);
  }
};

export default function Double({ backGrdColor, h }) {
  const [tap, setTap] = useState("...");

  useEffect(() => {
    setTimeout(() => {
      setTap("...");
    }, 1000);
  }, [tap]);

  const onSingleTap = () => setTap("single tap");
  const onDoubleTap = () => setTap("double tap");

  const onPress = () => {
    debounce(onSingleTap, onDoubleTap);
    
    //alert(tap);
  };

  return ( 
    <View style={[styles.buttonContainer, {height: h}]}>
      <Pressable style={[styles.button, { backgroundColor: backGrdColor }]} onPress={onPress}>
        {/* <Text>{"PRINT PRINT PRINT"}</Text> */}
        <Text>{tap}</Text>
      </Pressable>
    </View>
  );
}
{/* <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => Speech.speak("This is the default button")}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View> */}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    //padding: 100,
  },
  buttonContainer: {
    width: 340,
    height: 200,
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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//     width: "100%",
//     borderColor: "#000",
//     borderWidth: 4,
//   },
// });

// export default function Double() {
//   const tap = Gesture.Tap()
//     .numberOfTaps(2)
//     .onStart(() => {
//       console.log("Yay, double tap!");
//     });

//   return (
//     <GestureDetector gesture={tap}>
//       {
//         <Pressable>
//           <Text>{"hi this is on the screen"}</Text>{" "}
//         </Pressable>
//       }
//     </GestureDetector>
//   );
// }
