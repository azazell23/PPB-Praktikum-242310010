import { StyleSheet, Text, TextInput, View } from "react-native";

export default function InputField({ label, value, onChangeText }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  input: {
    minWidth: 120,
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
  },
  text: {
    fontWeight: "bold",
  },
});
