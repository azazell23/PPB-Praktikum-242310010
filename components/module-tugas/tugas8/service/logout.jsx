import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";

export default function Logout() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const logout = async () => {
      try {
        await AsyncStorage.removeItem("loggedIn");
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };
    logout();
  }, []);

  useEffect(() => {
    if (!loading) {
      router.replace("/latihan-8-apps/");
    }
  }, [loading]);

  return null;
}
