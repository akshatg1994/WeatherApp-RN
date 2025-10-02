import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import AntDesign from "@react-native-vector-icons/ant-design";
import SearchInput from "../components/SearchInput";
import Feather from "@react-native-vector-icons/feather";

const HomePage: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Header
        leftIcon={<AntDesign name="sun" size={30} color={"#EABF5E"} />}
        title="SkyCast"
        leftIconVisible={true}
        rightRender={
          <View style={styles.settingsButton}>
            <AntDesign name="setting" size={25} color={"#05406D"} />
            <Text>Settings</Text>
          </View>
        }
      />
      <SearchInput leftIcon={<Feather name="search" size={20} />} />
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  settingsButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderRadius: 18,
    borderColor: "#D8EAF6",
    backgroundColor: "#DDF4FF",
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
