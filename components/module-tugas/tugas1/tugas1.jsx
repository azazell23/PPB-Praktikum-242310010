import { StyleSheet, Text, View } from "react-native";

export default function Tugas1() {
  return (
    <View style={styles.container}>
      <Text>Selamat Datang di Praktikum Pemrograman Perangkat Bergerak</Text>
      <Text>Nama: ADE ANTONI SUGIARTO</Text>
      <Text>NIM: 242310010</Text>
      <Text>Prodi: Teknologi Informasi</Text>
      <Text>Angkatan: 2024</Text>
      <Text>Kelas: TI-24-PA</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50%",
  },
});
