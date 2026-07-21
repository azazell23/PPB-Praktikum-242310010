import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LoginForm from "../components/LoginForm";

export default function Login() {
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const authenticate = async () => {
      try {
        const item = await AsyncStorage.getItem("loggedIn");
        if (item === "true") {
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
        }
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };

    authenticate();
  }, []);

  useEffect(() => {
    if (!loading && loggedIn) {
      router.replace("/latihan-8-apps/(drawer)");
    }
  }, [loading, loggedIn]);

  if (loading) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={{ textAlign: "center", fontSize: 24, fontWeight: "bold" }}>
          Login
        </Text>
        <LoginForm />
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
