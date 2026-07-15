import { StyleSheet, TextInput, View } from "react-native";

export default function SearchBar({ search, setSearch }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={search}
        placeholder="Search"
        onChangeText={setSearch}
      />
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
