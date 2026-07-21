import { useState } from "react";
import { View } from "react-native";
import ProfileData from "../components/ProfileData";
import { profile_data } from "../constants/profile";

export default function Profile() {
  const [pfp, setPfp] = useState(profile_data.pfp);
  const [username, setUsername] = useState(profile_data.username);
  const [email, setEmail] = useState(profile_data.email);
  const [gender, setGender] = useState(profile_data.gender);
  const [birthdate, setBirthdate] = useState(profile_data.birthdate);

  return (
    <View>
      <ProfileData
        pfp={pfp}
        username={username}
        email={email}
        gender={gender}
        birthdate={birthdate}
        setUsername={setUsername}
        setEmail={setEmail}
        setGender={setGender}
        setBirthdate={setBirthdate}
      />
    </View>
  );
}
