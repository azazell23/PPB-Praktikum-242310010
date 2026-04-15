import { StyleSheet, Text, View } from "react-native";

const Tugas2 = () => {
  const bodyWeightinKg = 52;

  const bodyHeightinCm = 166;

  const meals = [
    { waktuMakan: "Sarapan", kalori: 450 },
    { waktuMakan: "Snack Pagi", kalori: 180 },
    { waktuMakan: "Makan Siang", kalori: 650 },
    { waktuMakan: "Snack Sore", kalori: 220 },
    { waktuMakan: "Makan Malam", kalori: 580 },
  ];

  const totalCalorie = meals
    .map(({ kalori }) => kalori)
    .reduce((prev, cur) => prev + cur, 0);

  const calorieCategory = () => {
    if (totalCalorie < 2000) {
      return "Kurang";
    } else if (totalCalorie <= 2500) {
      return "Cukup";
    } else {
      return "Berlebih";
    }
  };

  const bodyHeightinMeter = bodyHeightinCm / 100;

  const bodyMassIndex =
    bodyWeightinKg / (bodyHeightinMeter * bodyHeightinMeter);

  const intakeCategory = () => {
    if (bodyMassIndex < 18.5) return "Underweight";
    else if (bodyMassIndex >= 18.5 && bodyMassIndex <= 24.9) return "Healthy";
    else if (bodyMassIndex >= 25.0 && bodyMassIndex <= 29.9)
      return "Overweight";
    else if (bodyMassIndex >= 30) return "Obesity";
  };

  return (
    <View>
      <Text style={styles.title}>Memulai Tugas Latihan Praktikum 2</Text>

      <Text style={styles.title}>Pasien</Text>
      <Text>Nama: Ade</Text>
      <Text>Berat Badan: {bodyWeightinKg}</Text>
      <Text>Tinggi Badan: {bodyHeightinCm}</Text>

      <Text style={styles.title}>Porsi Makanan Harian</Text>
      {meals.map(({ waktuMakan, kalori }, idx) => (
        <Text key={idx}>
          {waktuMakan} - {kalori} kalori
        </Text>
      ))}

      <Text style={styles.title}>Hasil Perhitungan</Text>
      <Text>BMI: {bodyMassIndex}</Text>
      <Text>Status BMI: {intakeCategory()}</Text>
      <Text>Status Kalori: {calorieCategory()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 15,
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Tugas2;
