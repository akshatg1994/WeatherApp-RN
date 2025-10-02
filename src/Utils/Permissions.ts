import { Platform } from "react-native";
import { PERMISSIONS, check, request, RESULTS } from "react-native-permissions";

const LOCATION_PERMISSION =
  Platform.OS === "ios"
    ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
    : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;

export const checkLocationPermission = async (): Promise<boolean> => {
  try {
    const result = await check(LOCATION_PERMISSION);
    return result === RESULTS.GRANTED;
  } catch (e) {
    return false;
  }
};

export const requestLocationPermission = async (): Promise<boolean> => {
  try {
    const result = await request(LOCATION_PERMISSION);
    console.log('Permission result', result)
    return result === RESULTS.GRANTED;
  } catch (e) {
    return false;
  }
};

export const ensureLocationPermission = async (): Promise<boolean> => {
  const hasPermission = await checkLocationPermission();
  if (hasPermission) {
    return true;
  }
  return await requestLocationPermission();
};
