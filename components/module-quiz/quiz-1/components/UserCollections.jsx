import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { UserList } from "../constants/userlist";
import Card from "../molecules/Card";

export default function UserCollections({ onPress }) {
  return (
    <View style={styles.container}>
      {UserList.map(({ img, nama, title, department, email }, index) => {
        return (
          <Card key={index}>
            <Image source={img} style={styles.image} />
            <Text>{nama}</Text>
            <Text>{title}</Text>
            <Text>{department}</Text>
            <Text>{email}</Text>
            <TouchableOpacity style={styles.button} onPress={onPress}>
              <Text style={{ fontWeight: "bold" }}>View</Text>
            </TouchableOpacity>
          </Card>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    gap: 30,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
  },
});
