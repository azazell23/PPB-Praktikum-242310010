import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BookCollections from "../components/BookCollections";
import SearchBar from "../components/SearchBar";
import { ListBook } from "../constants/list_books";

export default function SearchPage() {
  const lastBook = ListBook[ListBook.length - 1];
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar />
      <ScrollView style={{ marginHorizontal: 10 }}>
        <BookCollections books={ListBook} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1ffdb",
  },
});
