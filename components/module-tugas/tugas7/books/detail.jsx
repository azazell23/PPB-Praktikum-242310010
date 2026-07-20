import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ListBook } from "../../tugas4/constants/list_books";

import * as Speech from "expo-speech";

export default function Detail() {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();
  const book = ListBook.find((book) => book.id == id);

  useEffect(() => {
    navigation.setOptions({ title: `Book ${id}` });
  }, [id, navigation]);

  const [isSpeaking, setIsSpeaking] = useState(false);

  const handlePress = () => {
    if (isSpeaking) {
      Speech.stop();
      setIsSpeaking(false);
    } else {
      Speech.speak(book?.story, {
        onStart: () => setIsSpeaking(true),
        onDone: () => setIsSpeaking(false),
        onStopped: () => setIsSpeaking(false),
        onError: () => setIsSpeaking(false),
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text>ID: {id}</Text>
      <Text>Title: {book?.title}</Text>
      <Text>Author: {book?.author}</Text>
      <Text>Sinopsis: {book?.sinopsis}</Text>
      <Text>{book?.story}</Text>
      <View style={styles.bottomSection}>
        <TouchableOpacity
          style={[styles.buttonStyle, { backgroundColor: "#49745e" }]}
          onPress={() => handlePress()}
        >
          <Ionicons name="play-sharp" size={24} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonStyle, { backgroundColor: "#e8ab30" }]}
          onPress={() => handlePress()}
        >
          <Ionicons name="stop-sharp" size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    marginTop: 60,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 15,
  },
  bottomSection: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
  buttonStyle: {
    padding: 8,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
