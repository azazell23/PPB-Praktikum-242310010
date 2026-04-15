import Filler from "@/components/module-latihan/filler";
import { StatusBar } from "expo-status-bar";
import { Button, Image, ScrollView, StyleSheet, Text } from "react-native";

export const Latihan3 = () => {
  return (
    <ScrollView>
      <Text>Latihan 3</Text>
      <Image
        source={require("../../assets/images/icon.png")}
        style={styles.image}
      />
      <Filler />
      <Button
        title="Go to Latihan 2"
        onPress={console.log("Go to Latihan 2")}
      />
      <StatusBar style="auto" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});

export default Latihan3;
