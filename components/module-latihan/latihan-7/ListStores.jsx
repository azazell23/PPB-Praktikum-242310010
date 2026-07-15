import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export const ListStores = ({ stores = [] }) => {
  if (!stores || stores.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No stores nearby</Text>
      </View>
    );
  }

  return (
    <View>
      {stores.map((store, index) => (
        <View key={index} style={styles.storeCard}>
          <View style={styles.iconContainer}>
            <AntDesign name="shopping" size={24} color={"#10B981"} />
          </View>
          <View style={styles.storeInfo}>
            <Text style={styles.storeName}>{store?.title}</Text>
            <View style={styles.ratingContainer}>
              <AntDesign name="star" size={16} color={"#FFA500"} />
              <Text style={styles.rating}>{store?.rating || "4.5"}</Text>
            </View>
            <Text style={styles.storeDetails}>
              Open · Closes 10:00 pm · {store?.phone || "(021) 1234-5678"}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40,
  },
  emptyText: {
    fontSize: 16,
    color: "#999",
  },
  storeCard: {
    flexDirection: "row",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    alignItems: "center",
  },
  iconContainer: {
    marginRight: 12,
  },
  storeInfo: {
    flex: 1,
  },
  storeName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  rating: {
    marginLeft: 4,
    fontSize: 14,
    color: "#666",
  },
  storeDetails: {
    fontSize: 12,
    color: "#999",
  },
});
