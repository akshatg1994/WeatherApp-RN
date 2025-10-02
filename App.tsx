import { useEffect, useState } from "react";
import { StatusBar, StyleSheet, useColorScheme, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import SplashScreen from "./src/screens/SplashScreen";
import HomeNav from "./src/navigations/HomeNav";
import { useAppDispatch, useAppSelector } from "./src/app/hooks";
import { fetchWeatherByCoords } from "./src/features/weather/thunks";
import { ensureLocationPermission } from "./src/Utils/Permissions";

function App() {
  const dispatch = useAppDispatch();
  const { status, data, error } = useAppSelector((s) => s.weather);
  const isDarkMode = useColorScheme() === "dark";
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [isLocationPermitted, setLocationPermitted] = useState<
    "granted" | "rejected" | "waiting"
  >("waiting");

  useEffect(() => {
    (async () => {
      const permissionGrant = await ensureLocationPermission();
      setLocationPermitted(permissionGrant ? "granted" : "rejected");
      if (permissionGrant) {
        try {
          await dispatch(
            fetchWeatherByCoords({
              lat: 12.906381,
              long: 77.632203,
            })
          ).unwrap();
        } catch (e) {
          // handle error if needed
        }
      }
      setIsInitialLoad(false);
    })();
  }, [dispatch]);

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={["top"]} style={styles.container}>
        <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
        <View style={styles.container}>
          {isInitialLoad ? <SplashScreen /> : <HomeNav />}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF6FF'
  },
});

export default App;
