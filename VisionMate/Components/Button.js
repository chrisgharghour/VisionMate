import { StyleSheet, View, Pressable, Text } from 'react-native';
// import FontAwesome from "@expo/vector-icons/FontAwesome";

// Using inline styles allows overriding the default styles for a specific value

export default function SimpleButton2({ label, theme }) {
    if (theme === "primary") {
        return (
          <View
          style={[styles.buttonContainer, { borderColor: "#ffd33d" }]}
          >
            <Pressable
              style={[styles.button, { backgroundColor: "#fff" }]}
              onPress={() => alert('You pressed a button.')}
            >
              <Text style={[styles.buttonLabel, { color: "#25292e" }]}>{label}</Text>
            </Pressable>
        </View>
        );
    }
    return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => alert('You pressed a button made by missy.')}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

// const styles = StyleSheet.create({
//   buttonContainer: {
//     width: 320,
//     height: 68,
//     marginHorizontal: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 3,
//     borderColor: "#000",
//     borderWidth: 4,
//     borderRadius: 18
//   },
//   button: {
//     borderRadius: 10,
//     width: '100%',
//     height: '100%',
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexDirection: 'row',
//   },
//   // not actively using buttonIcon as we dont have one right now but optional to add
//   buttonIcon: {
//     paddingRight: 8,
//   },
//   buttonLabel: {
//     color: '#000',
//     fontSize: 16,
//   },
// });

// export default function SimpleButton2({ onPress, title }) {
//     return (
//       <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
//         <Text style={styles.buttonText}>{title}</Text>
//       </Pressable>
//     );
//   };
  
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