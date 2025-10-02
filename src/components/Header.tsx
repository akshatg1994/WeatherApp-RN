import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface HeaderProps {
  title: string;
  leftIcon?: React.ReactNode;
  onLeftIconPress?: () => void;
  leftIconVisible?: boolean;
  rightPress?: () => void;
  rightRender?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({
  title,
  leftIcon,
  onLeftIconPress,
  leftIconVisible = false,
  rightPress,
  rightRender,
}) => {
  return (
    <View style={styles.headerBar}>
      <View style={styles.headerLeftSection}>
        {leftIconVisible && leftIcon && (
          <View onTouchEnd={onLeftIconPress}>{leftIcon}</View>
        )}
        <Text>{title}</Text>
      </View>
      {rightRender && <View onTouchEnd={rightPress}>{rightRender}</View>}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerBar: {
    // height: 50,
    paddingVertical: 16,
    backgroundColor: "#F0FBFF",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  headerLeftSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
