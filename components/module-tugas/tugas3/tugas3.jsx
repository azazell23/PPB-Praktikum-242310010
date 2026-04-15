import { useState } from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Tugas3 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [age, setAge] = useState(0);
  const [address, setAddress] = useState("");
  const [nim, setNim] = useState("");

  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("@/assets/images/avatar.png")}
          style={styles.header.imgAvatar}
        />
      </View>
      <ImageBackground
        source={require("@/assets/images/android-icon-background.png")}
        style={{ width: "100%", opacity: 0.5 }}
      >
        <View style={styles.identity.container}>
          <Text style={styles.identity.title}>Phone</Text>
          <TextInput
            value={phoneNumber}
            autoFocus
            onChange={(e) => setPhoneNumber(e.target.value)}
            keyboardType="numeric"
            style={styles.identity.card_input}
          />
        </View>

        <View style={styles.identity.container}>
          <Text style={styles.identity.title}>Email</Text>
          <TextInput
            value={email}
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
            keyboardType="default"
            style={styles.identity.card_input}
          />
        </View>
        <View style={styles.identity.container}>
          <Text style={styles.identity.title}>Address</Text>
          <TextInput
            value={address}
            autoFocus
            keyboardType="default"
            onChange={(e) => setAddress(e.target.value)}
            style={styles.identity.card_input}
          />
        </View>
        <View style={styles.identity.container}>
          <Text style={styles.identity.title}>NIM</Text>
          <TextInput
            value={nim}
            autoFocus
            onChange={(e) => setNim(e.target.value)}
            keyboardType="numeric"
            style={styles.identity.card_input}
          />
        </View>
        <View style={styles.identity.container}>
          <Text style={styles.identity.title}>Name</Text>
          <TextInput
            value={name}
            autoFocus
            onChange={(e) => setName(e.target.value)}
            keyboardType="default"
            style={styles.identity.card_input}
          />
        </View>
        <View style={styles.identity.container}>
          <Text style={styles.identity.title}>Age</Text>
          <TextInput
            value={age}
            autoFocus
            onChange={(e) => setAge(e.target.value)}
            style={styles.identity.card_input}
            keyboardType="numeric"
          />
        </View>
      </ImageBackground>
      <View style={styles.identity.container}>
        <TouchableOpacity style={styles.identity.button}>
          <Text style={styles.button_text}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  header: {
    title: {
      fontSize: 40,
      fontWeight: "bold",
    },
    subtitle: {
      fontWeight: "bold",
      fontSize: 20,
      color: "#9b9d9f",
    },
    imgAvatar: {
      width: 150,
      height: 150,
      borderRadius: 100,
      borderWidth: 4,
      padding: 2,
      backgroundColor: "#f2f2f2",
    },
  },
  identity: {
    container: {
      padding: 10,
      alignSelf: "stretch",
    },
    card_input: {
      borderWidth: 2,
      borderColor: "#000",
      borderRadius: 10,
      paddingHorizontal: 10,
      paddingVertical: 8,
      marginBottom: 5,
    },
    title: {
      fontSize: 16,
      color: "#000",
      marginBottom: 5,
    },
    input_text: {
      fontSize: 16,
      padding: 0,
      color: "#000",
    },
    button: {
      backgroundColor: "#0ea6d0",
      alignItems: "center",
      padding: 15,
      borderRadius: 10,
    },
    button_text: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "bold",
    },
  },
});

export default Tugas3;
