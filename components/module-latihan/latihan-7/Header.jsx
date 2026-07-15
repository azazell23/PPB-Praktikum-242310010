import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Header = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.headerContainer} edges={["top"]}>
      <View style={styles.headerContent}>
        <TouchableOpacity onPress={() => router.push("/main-apps")}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  headerContent: {
    padding: 16,
  },
});
