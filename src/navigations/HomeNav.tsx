import React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "../screens/HomePage";
import { NavigationContainer } from "@react-navigation/native";
import Favorites from "../screens/Favorites";
import Settings from "../screens/Setings";
import { Feather } from "@react-native-vector-icons/feather";

const Tab = createBottomTabNavigator();

const HomeNav: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Tab.Screen
          name="Home"
          component={HomePage}
          options={{
            tabBarIcon: () => <Feather name="home" size={25}/>,
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={Favorites}
          options={{
            tabBarIcon: () => <Feather name="star" size={25}/>,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: () => <Feather name="settings" size={25}/>,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default HomeNav;
