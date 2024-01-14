import { StyleSheet, View, Pressable, Text } from 'react-native';
// import FontAwesome from "@expo/vector-icons/FontAwesome";

// Using inline styles allows overriding the default styles for a specific value

export default function Button({ label, theme }) {
    if (theme === "primary") {
        return (
          <View
          style={[styles.buttonContainer, { borderColor: "#ffd33d" }]}
          >
            <Pressable
              style={[styles.button, { backgroundColor: "#fff" }]}
              // onPress={() => alert('You pressed the primary button.')}
              onPress={() => alert('You pressed the primary button.')}
            >
              <Text style={[styles.buttonLabel, { color: "#25292e" }]}>{label}</Text>
            </Pressable>
        </View>
        );
    }
    return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => alert('You pressed the default button.')}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
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
