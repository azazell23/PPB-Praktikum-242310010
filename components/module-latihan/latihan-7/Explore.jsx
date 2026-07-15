import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";

import * as Location from "expo-location";

import { useEffect, useMemo, useRef, useState } from "react";

import { Alert, StyleSheet, Text, View } from "react-native";

import { GestureHandlerRootView } from "react-native-gesture-handler";

import { Header } from "./Header";
import { ListStores } from "./ListStores";
import { MapView } from "./MapView";

export default function Explore() {
  const bottomSheetRef = useRef(null);

  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState(null);

  const snapPoints = useMemo(() => ["35%", "50%", "90%"], []);

  const handleSheetChange = (index) => {
    if (index === -1) {
      bottomSheetRef.current.snapToIndex(0);
    }
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        Alert.alert("Izin ditolak", "Aplikasi membutuhkan akses lokasi");

        return;
      }

      let userLocation = await Location.getCurrentPositionAsync({});

      setLocation(userLocation.coords);

      let addressData = await Location.reverseGeocodeAsync({
        latitude: userLocation.coords.latitude,
        longitude: userLocation.coords.longitude,
      });

      if (addressData.length > 0) {
        setAddress(addressData[0]);
      }
    })();
  }, []);

  return (
    <View style={style_explore.container}>
      <GestureHandlerRootView>
        <MapView current_location={location} />

        <Header />

        <BottomSheet
          ref={bottomSheetRef}
          index={0}
          enablePanDownToClose
          onChange={handleSheetChange}
          snapPoints={snapPoints}
          backdropComponent={(props) => (
            <BottomSheetBackdrop
              {...props}
              opacity={0.5}
              appearsOnIndex={1}
              disappearsOnIndex={0}
            />
          )}
          backgroundStyle={{
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: "white",
          }}
        >
          <BottomSheetScrollView>
            <Text>Explore Store</Text>

            {address && (
              <Text style={style_explore.subtitle}>
                Location:{" "}
                {(address?.city || address?.name || "-") +
                  ", " +
                  (address?.subregion || address?.region || "-")}
              </Text>
            )}

            <View style={{ marginTop: 20 }}>
              <ListStores />
            </View>
          </BottomSheetScrollView>
        </BottomSheet>
      </GestureHandlerRootView>
    </View>
  );
}

const style_explore = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  map: {
    flex: 1,
  },
  headerContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  headerContent: {
    padding: 16,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 20,
    marginTop: 10,
    color: "#222",
  },

  bottomSheetContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },

  locationContainer: {
    marginTop: 10,
  },

  sectionContainer: {
    marginTop: 20,
  },

  sheetHandle: {
    width: 50,
    height: 5,
    borderRadius: 10,
    backgroundColor: "#ccc",
    alignSelf: "center",
    marginVertical: 10,
  },

  mapFallback: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  mapFallbackText: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 12,
    color: "#222",
  },
  mapFallbackSubtext: {
    fontSize: 14,
    color: "#666",
    marginTop: 8,
    textAlign: "center",
  },
  mapFallbackHint: {
    fontSize: 12,
    color: "#999",
    marginTop: 8,
    textAlign: "center",
    paddingHorizontal: 20,
  },
});
