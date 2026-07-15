# React Native Maps Setup Guide

## ✅ Configuration Done

Your project has been configured with **react-native-maps**. The following files have been updated:

1. **app.json** - Added Google Maps API key placeholders and permissions
2. **MapView.jsx** - Replaced expo-maps with react-native-maps
3. **Header.jsx** - Fixed imports and styling
4. **Explore.jsx** - Added missing imports and styles
5. **ListStores.jsx** - Fixed component structure and styling

## 📋 Required Setup Steps

### Step 1: Get Google Maps API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the following APIs:
   - Maps SDK for Android
   - Maps SDK for iOS
   - Places API (optional, for place search)
4. Create an API key:
   - Click "Create Credentials" → "API Key"
   - Copy the generated key

### Step 2: Update app.json

Replace `YOUR_GOOGLE_MAPS_API_KEY_HERE` with your actual API key in **app.json**:

**For Android:**

```json
"android": {
  "googleMapsApiKey": "YOUR_ACTUAL_API_KEY_HERE"
}
```

**For iOS:**

```json
"ios": {
  "googleMapsApiKey": "YOUR_ACTUAL_API_KEY_HERE"
}
```

### Step 3: Rebuild the App

After updating the API key, rebuild your app:

```bash
# For Android
expo run:android

# For iOS
expo run:ios
```

## 🗺️ Features Included

- ✅ Current user location tracking
- ✅ Interactive map with zoom, rotate, and pitch controls
- ✅ User location marker
- ✅ Compass display
- ✅ Platform detection (Android, iOS, Web)
- ✅ Location fallback UI for web
- ✅ Loading state while fetching location

## 📍 Usage Example

The map automatically:

1. Requests location permissions
2. Gets your current location
3. Centers the map on your location
4. Shows a marker at your location

## 🔧 Customization

### Add Custom Markers

Edit **MapView.jsx** to add more markers:

```jsx
<MapViewComponent.Marker
  coordinate={{ latitude: 37.7749, longitude: -122.4194 }}
  title="Store Name"
  description="Store details"
  pinColor="#FF5733"
/>
```

### Adjust Map Region

Change the `latitudeDelta` and `longitudeDelta` in MapView.jsx:

```jsx
const initialRegion = {
  latitude: current_location.latitude,
  longitude: current_location.longitude,
  latitudeDelta: 0.0922, // Larger = more zoomed out
  longitudeDelta: 0.0421,
};
```

## 🐛 Troubleshooting

### Map is blank

- Check that Google Maps API key is correctly set in app.json
- Verify API key has Maps SDK for Android/iOS enabled
- Clear app cache: `expo prebuild --clean`

### Location not updating

- Check that location permissions are granted
- On iOS: Verify NSLocationWhenInUseUsageDescription in app.json
- On Android: Check AndroidManifest.xml for location permissions

### "Maps API Key not specified" error

- Make sure app.json has the correct key in both iOS and Android sections
- Rebuild the app after updating the key

## 📚 Resources

- [react-native-maps Documentation](https://github.com/react-native-maps/react-native-maps)
- [Google Maps API Documentation](https://developers.google.com/maps/documentation)
- [Expo Documentation](https://docs.expo.dev/)
