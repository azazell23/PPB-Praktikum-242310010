import { useMemo, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BookCollections from "../components/BookCollections";
import { ListBook } from "../constants/list_books";

const PAGE_SIZE = 4;

export default function PaidCatalogues() {
  const [page, setPage] = useState(1);

  const paidBooks = useMemo(
    () => ListBook.filter((book) => book.is_free === false),
    [],
  );

  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(paidBooks.length / PAGE_SIZE)),
    [paidBooks.length],
  );

  const currentBooks = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return paidBooks.slice(start, start + PAGE_SIZE);
  }, [page, paidBooks]);

  const handlePrev = () => {
    setPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ marginHorizontal: 10 }}>
        <BookCollections books={currentBooks} total_books={paidBooks.length} />
        <View style={styles.paginationContainer}>
          <TouchableOpacity
            style={[
              styles.paginationButton,
              page === 1 && styles.disabledButton,
            ]}
            activeOpacity={0.7}
            onPress={handlePrev}
            disabled={page === 1}
          >
            <Text style={styles.paginationText}>Previous</Text>
          </TouchableOpacity>

          <Text style={styles.pageInfo}>
            Page {page} / {totalPages}
          </Text>

          <TouchableOpacity
            style={[
              styles.paginationButton,
              page === totalPages && styles.disabledButton,
            ]}
            activeOpacity={0.7}
            onPress={handleNext}
            disabled={page === totalPages}
          >
            <Text style={styles.paginationText}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1ffdb",
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 14,
    marginBottom: 20,
    paddingHorizontal: 8,
  },
  paginationButton: {
    backgroundColor: "#5e9c49",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  disabledButton: {
    backgroundColor: "#c4c4c4",
  },
  paginationText: {
    color: "#ffffff",
    fontWeight: "700",
  },
  pageInfo: {
    color: "#333333",
    fontWeight: "700",
  },
});
