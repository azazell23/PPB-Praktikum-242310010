import { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "./_ui/Card";
import InputField from "./molecules/InputField";

export default function index() {
  const [nama, setNama] = useState("");
  const [nip, setNip] = useState("");
  const [jabatan, setJabatan] = useState("");
  const [institusi, setInstitusi] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.sub_container}>
        <Card>
          <View style={{ alignItems: "center" }}>
            <Image
              style={styles.image}
              source={require("@/assets/images/avatar.png")}
            />
          </View>

          <InputField
            label={"Nama :"}
            value={nama}
            onChangeText={(val) => setNama(val)}
          />
          <InputField
            label={"NIP :"}
            value={nip}
            onChangeText={(val) => setNip(val)}
          />
          <InputField
            label={"Jabatan :"}
            value={jabatan}
            onChangeText={(val) => setJabatan(val)}
          />
          <InputField
            label={"Institusi :"}
            value={institusi}
            onChangeText={(val) => setInstitusi(val)}
          />
        </Card>
        <Card style={{ minWidth: 280 }}>
          <Text>Nama: {nama}</Text>
          <Text>NIP: {nip}</Text>
          <Text>Jabatan: {jabatan}</Text>
          <Text>Institusi: {institusi}</Text>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sub_container: {
    flex: 1,
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
    borderWidth: 3,
  },
});
