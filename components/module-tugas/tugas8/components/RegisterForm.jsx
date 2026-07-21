"use client";

import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function RegisterForm() {
  const router = useRouter();

  const redirectLogin = () => {
    router.back();
  };

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleRegister = async () => {
    if (!username || !email || !password || !confirm) {
      Alert.alert("Please fill in all the fields");
      return;
    }

    if (password != confirm) {
      Alert.alert("Password doesn't match");
      return;
    }

    const response = await axios.post("https://fakestoreapi.com/users", {
      username,
      email,
      password,
    });

    if (response.status !== 201) {
      Alert.alert("Register failed, please try again later.");
      return;
    }

    try {
      await AsyncStorage.setItem("loggedIn", "true");
      Alert.alert("Register successful.");
      router.replace("/latihan-8-apps/(drawer)");
    } catch (err) {
      Alert.alert(
        "Register failed, please try again later. Error: ",
        err.message,
      );
    }

    return;
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputField}>
        <Text style={styles.text}>Username</Text>
        <TextInput
          style={styles.textInput}
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
      </View>
      <View style={styles.inputField}>
        <Text style={styles.text}>Email</Text>
        <TextInput
          style={styles.textInput}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.inputField}>
        <Text style={styles.text}>Password</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.textInput}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <View style={styles.inputField}>
        <Text style={styles.text}>Confirm Password</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.textInput}
          value={confirm}
          onChangeText={(text) => setConfirm(text)}
        />
      </View>
      <View style={styles.registerSection}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => redirectLogin()}>
          <Text style={{ color: "#49745e" }}>Login</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => handleRegister()}
        >
          <Text style={{ color: "#fff" }}>Register</Text>
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
