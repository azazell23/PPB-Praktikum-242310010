import { useMemo, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BookCollections from "../components/BookCollections";
import SearchBar from "../components/SearchBar";
import { ListBook } from "../constants/list_books";

export default function SearchPage() {
  const lastBook = ListBook[ListBook.length - 1];
  const [search, setSearch] = useState("");

  const handleSearch = (value) => {
    setSearch(value);
  };

  const books = useMemo(() => {
    let items = [...ListBook];
    if (search) {
      const searchLower = search.toLowerCase();
      return items.filter((obj) => {
        return Object.values(obj).some((val) => {
          try {
            return (
              val != null && String(val).toLowerCase().includes(searchLower)
            );
          } catch (e) {
            return false;
          }
        });
      });
    }
    return items;
  }, [search]);

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar search={search} setSearch={handleSearch} />
      <ScrollView style={{ marginHorizontal: 10 }}>
        <BookCollections books={books} />
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
