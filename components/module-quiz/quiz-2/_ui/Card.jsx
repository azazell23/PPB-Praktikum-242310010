import { StyleSheet, View } from "react-native";

export default function Card({ children, style }) {
  return <View style={[styles.container, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderRadius: 10,
    backgroundColor: "#fff",
    boxShadow: "5px 5px 2px 0px rgba(0,0,0,0.3)",
    gap: 12,
  },
});
