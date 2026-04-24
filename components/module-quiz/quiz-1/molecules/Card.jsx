import { StyleSheet, View } from "react-native";

export default function Card({ children }) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#d1eaed",
    borderRadius: 15,
    boxShadow: "5px 5px 2px 0px rgba(0,0,0,0.5)",
  },
});
