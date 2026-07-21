"use client";

import { useRouter } from "expo-router";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function LoginForm() {
  const router = useRouter();

  const redirectRegister = () => {
    router.push("/latihan-8-apps/register");
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputField}>
        <Text style={styles.text}>Email</Text>
        <TextInput style={styles.textInput} />
      </View>
      <View style={styles.inputField}>
        <Text style={styles.text}>Password</Text>
        <TextInput secureTextEntry={true} style={styles.textInput} />
      </View>
      <View style={styles.registerSection}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity onPress={() => redirectRegister()}>
          <Text style={{ color: "#49745e" }}>Register</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={{ color: "#fff" }}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputField: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  text: {
    minWidth: 90,
  },
  textInput: {
    borderWidth: 1,
    flex: 1,
    padding: 10,
    borderRadius: 10,
  },
  container: {
    gap: 10,
  },
  registerSection: {
    flexDirection: "row",
    justifyContent: "center",
  },
  loginButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#49745e",
    padding: 10,
    borderRadius: 20,
  },
});
