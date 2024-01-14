// import React from "react";
// import { Button, DoubleClick } from "react-native";

// import { View, StyleSheet } from "react-native";
// import { Gesture, GestureDetector } from "react-native-gesture-handler";
// import { DoubleClick } from "react-native-double-tap";

import { useEffect, useState } from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
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
const TIMEOUT = 500;
const debounce = (onSingle, onDouble) => {
  if (timer) {
    clearTimeout(timer);
    timer = null;
    onDouble();
  } else {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      onSingle();
    }, TIMEOUT);
  }
};

export default function Double() {
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
    <Pressable style={styles.container} onPress={onPress}>
      <Text>{"PRINT PRINT PRINT"}</Text>
      <Text>{tap}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});

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
