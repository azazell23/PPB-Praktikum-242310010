import { Drawer } from "expo-router/drawer";

export default function Layout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Home",
          title: "Home",
        }}
      />
      <Drawer.Screen
        name="SearchPage" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Search",
          title: "Search",
        }}
      />
      <Drawer.Screen
        name="PaidCatalogue" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Premium Catalogues",
          title: "Premium Catalogues",
        }}
      />
      <Drawer.Screen
        name="Profile" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Profile",
          title: "Profile",
        }}
      />
    </Drawer>
  );
}
