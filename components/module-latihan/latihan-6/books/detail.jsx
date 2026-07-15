import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ListBook } from "../../latihan-4/constants/list_books";

export default function Detail() {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();
  const book = ListBook.find((book) => book.id == id);

  useEffect(() => {
    navigation.setOptions({ title: `Book ${id}` });
  }, [id, navigation]);

  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
      <Text>ID: {id}</Text>
      <Text>Title: {book?.title}</Text>
      <Text>Author: {book?.author}</Text>
      <Text>Sinopsis: {book?.sinopsis}</Text>
    </SafeAreaView>
  );
}
