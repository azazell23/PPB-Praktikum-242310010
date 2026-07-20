import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileData({
  username,
  email,
  birthdate,
  gender,
  pfp,
  setUsername,
  setEmail,
  setBirthdate,
  setGender,
  setPfp,
}) {
  useFocusEffect(
    useCallback(() => {
      setEditStatus(false); // runs every time this screen gains focus
    }, []),
  );

  const [editStatus, setEditStatus] = useState(false);
  const [username_, setUsername_] = useState(username);
  const [email_, setEmail_] = useState(email);
  const [gender_, setGender_] = useState(gender);
  const [birthdate_, setBirthdate_] = useState(birthdate);

  const data = [
    {
      fieldname: "Username",
      value: username,
      editValue: username_,
      setEditValue: setUsername_,
    },
    {
      fieldname: "Email",
      value: email,
      editValue: email_,
      setEditValue: setEmail_,
    },
    {
      fieldname: "Gender",
      value: gender,
      editValue: gender_,
      setEditValue: setGender_,
    },
    {
      fieldname: "Birthdate",
      value: birthdate,
      editValue: birthdate_,
      setEditValue: setBirthdate_,
    },
  ];

  const handleEditData = () => {
    setUsername(username_);
    setEmail(email_);
    setBirthdate(birthdate_);
    setGender(gender_);
    setEditStatus(false);
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <View style={styles.pfpContainer}>
        <View>
          <Image source={pfp} style={styles.pfp}></Image>
          <TouchableOpacity style={styles.changePfp}>
            <Ionicons name="camera-sharp" size={24} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.userData}>
        {data.map(({ fieldname, value, editValue, setEditValue }, index) => {
          return (
            <View key={index} style={styles.dataField}>
              <Text
                style={{
                  minWidth: 80,
                  fontSize: 16,
                }}
              >
                {fieldname}
              </Text>
              {editStatus ? (
                <TextInput
                  value={editValue}
                  placeholder={fieldname}
                  style={styles.inputField}
                  onChangeText={(text) => setEditValue(text)}
                />
              ) : (
                <Text style={{ fontSize: 16 }}>: {value}</Text>
              )}
            </View>
          );
        })}
      </View>
      <View>
        {editStatus ? (
          <TouchableOpacity
            style={[styles.bottomSection, { backgroundColor: "#49745e" }]}
            onPress={() => handleEditData()}
          >
            <Text>Edit Data</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[styles.bottomSection, { backgroundColor: "#e8ab30" }]}
            onPress={() => setEditStatus(true)}
          >
            <Text>Edit Data</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    margin: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  pfpContainer: {
    alignItems: "center",
  },
  pfp: {
    width: 120,
    height: 120,
    backgroundColor: "#fff",
    borderRadius: 100,
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
  },
  changePfp: {
    position: "absolute",
    right: -4,
    bottom: -4,
    backgroundColor: "#49745e",
    padding: 10,
    borderRadius: 100,
  },
  userData: {
    marginTop: 20,
    justifyContent: "flex-start",
    gap: 10,
  },
  dataField: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  inputField: {
    borderWidth: 1,
    borderRadius: 10,
    flex: 1,
    paddingHorizontal: 10,
  },
  bottomSection: {
    alignItems: "center",
    paddingVertical: 10,
    marginTop: 10,
    borderRadius: 15,
  },
});
