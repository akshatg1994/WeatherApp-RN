import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

interface searchProps {
  leftIcon?: React.ReactNode;
}

const SearchInput: React.FC<searchProps> = ({ leftIcon }) => {
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <View style={styles.searchContainer}>
      {leftIcon}
      <TextInput
        style={{ flex: 1 }}
        placeholder="Search City..."
        placeholderTextColor={"#253B58"}
      ></TextInput>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  searchContainer: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#D8EAF6",
    backgroundColor: "#FFF",
    marginHorizontal: 16,
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 10,
    flexDirection: "row",
    marginTop: 8,
    gap: 10,
  },
});
