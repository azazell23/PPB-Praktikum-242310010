import { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import UserCollections from "./components/UserCollections";
import { UserList } from "./constants/userlist";

export default function index() {
  const totalUsers = UserList.length;

  const [clickedState, setClickedState] = useState(false);

  const handleButtonPress = () => {
    setClickedState(true);
  };

  if (clickedState) {
    const { img, nama, title, department, email } = UserList[0]; // selected user
    return (
      <SafeAreaView style={styles.staticPageContainer}>
        <View style={{ marginHorizontal: 20 }}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              paddingBottom: 20,
            }}
          >
            <Image style={styles.image} source={img} />
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>{nama}</Text>
            <Text>{title}</Text>
            <Text>{department}</Text>
            <Text>{email}</Text>
          </View>
          <View>
            <Text
              style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}
            >
              Portofolio List
            </Text>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-around",
              }}
            >
              <View style={styles.portofolioCard}>
                <Image
                  source={require("./img/x_logo.jpg")}
                  style={styles.image}
                />
                <Text style={styles.portofolioTitle}>Twitter Duplicate</Text>
                <Text>Code: AA-001</Text>
              </View>
              <View style={styles.portofolioCard}>
                <Image
                  source={require("./img/youtube_logo.png")}
                  style={styles.image}
                />
                <Text style={styles.portofolioTitle}>
                  Social Media Prototype
                </Text>
                <Text>Code: AA-002</Text>
              </View>
            </View>
          </View>
        </View>

        <View></View>
        <TouchableOpacity
          onPress={() => {
            setClickedState(false);
          }}
          style={styles.button}
        >
          <Text style={{ fontWeight: "bold" }}>Back</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.fontHeader}>List User</Text>
        <Text>Total User: {totalUsers}</Text>
      </View>
      <ScrollView>
        <UserCollections onPress={handleButtonPress} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  fontHeader: {
    fontSize: 20,
    fontWeight: "bold",
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  staticPageContainer: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "column",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  portofolioTitle: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  portofolioCard: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    maxWidth: "44%",
    borderRadius: 15,
    boxShadow: "5px 5px 2px 0px rgba(0,0,0,0.5)",
  },
});
