import { useState } from "react";

import { Platform, StyleSheet, Text, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import RNMapView, { Marker } from "react-native-maps";

export const MapView = ({ current_location }) => {
  const [isMapReady, setIsMapReady] = useState(false);

  if (Platform.OS === "web") {
    return (
      <View style={styles.mapFallback}>
        <Ionicons name="map-outline" size={80} color="#10B981" />
        <Text style={styles.mapFallbackText}>Map View Unavailable</Text>
        <Text style={styles.mapFallbackSubtext}>
          Maps are only available on Android and iOS devices
        </Text>
        <Text style={styles.mapFallbackHint}>
          Please run this app on a mobile device or emulator
        </Text>
      </View>
    );
  }

  if (!current_location) {
    return (
      <View style={styles.mapFallback}>
        <Ionicons name="location-outline" size={80} color="#10B981" />
        <Text style={styles.mapFallbackText}>Loading Location</Text>
        <Text style={styles.mapFallbackSubtext}>
          Fetching your current location...
        </Text>
      </View>
    );
  }

  const initialRegion = {
    latitude: current_location.latitude,
    longitude: current_location.longitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <RNMapView
      style={styles.map}
      initialRegion={initialRegion}
      onMapReady={() => setIsMapReady(true)}
      showsUserLocation={true}
      showsMyLocationButton={true}
      showsCompass={true}
      scrollEnabled={true}
      zoomEnabled={true}
      rotateEnabled={true}
      pitchEnabled={true}
      provider={Platform.OS === "android" ? "google" : undefined}
    >
      {/* User location marker */}
      {isMapReady && (
        <Marker
          coordinate={{
            latitude: current_location.latitude,
            longitude: current_location.longitude,
          }}
          title="My Location"
          description="Current location"
          pinColor="#10B981"
        />
      )}
    </RNMapView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
    width: "100%",
    height: "100%",
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
