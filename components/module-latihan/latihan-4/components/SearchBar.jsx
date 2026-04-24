import { StyleSheet, TextInput, View } from "react-native";

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Search" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  input: {
    padding: 12,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
});
