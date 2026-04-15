import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const latihan_3 = () => {
  const PersonalData = {
    name: "Anton Sukamto",
    nim: "20200101",
    address:
      "Jl. Rangga Gading, No.01, Gudang, Kecamatan Bogor Tengah, Kota Bogor, Jawa Barat",
    email: "anton.sukamto@ibik.ac.id",
    phone_number: "081234567890",
  };
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/avatar.png")}
        style={styles.header.imgAvatar}
      />
      <Text style={styles.header.title}>Nama: {PersonalData.name}</Text>
      <Text style={styles.header.subtitle}>NIM: {PersonalData.nim}</Text>
      <View style={styles.identity.container}>
        <Text style={styles.identity.title}>Phone</Text>
        <TextInput
          value={PersonalData.phone_number}
          autoFocus
          keyboardType="numeric"
          style={styles.identity.card_input}
        />
      </View>
      <View style={styles.identity.container}>
        <Text style={styles.identity.title}>Email</Text>
        <TextInput
          value={PersonalData.email}
          autoFocus
          keyboardType="default"
          style={styles.identity.card_input}
        />
      </View>
      <View style={styles.identity.container}>
        <Text style={styles.identity.title}>Address</Text>
        <TextInput
          value={PersonalData.address}
          autoFocus
          keyboardType="default"
          style={styles.identity.card_input}
        />
      </View>
      <View style={styles.identity.container}>
        <Text style={styles.identity.title}>NIM</Text>
        <TextInput
          value={PersonalData.nim}
          autoFocus
          keyboardType="numeric"
          style={styles.identity.card_input}
        />
      </View>
      <View style={styles.identity.container}>
        <Text style={styles.identity.title}>Name</Text>
        <TextInput
          value={PersonalData.name}
          autoFocus
          keyboardType="default"
          style={styles.identity.card_input}
        />
      </View>
      <View styles={styles.identity.container}>
        <TouchableOpacity style={styles.identity.button}>
          <Text style={styles.button_text}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
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
      marginTop: 20,
      alignSelf: "stretch",
    },
    card_input: {
      borderWidth: 1,
      borderColor: "#9b9d9f",
      borderRadius: 10,
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginBottom: 10,
    },
    title: {
      fontSize: 16,
      color: "#9b9d9f",
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

export default latihan_3;
