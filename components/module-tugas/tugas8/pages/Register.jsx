import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import RegisterForm from "../components/RegisterForm";

export default function Register() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={{ textAlign: "center", fontSize: 24, fontWeight: "bold" }}>
          Register
        </Text>
        <RegisterForm />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    backgroundColor: "#fff",
    minWidth: 300,
    gap: 30,
    padding: 20,
    borderRadius: 20,
  },
});
