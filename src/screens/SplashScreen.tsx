import React from "react";
import { View, Text } from "react-native";
import { AntDesign } from "@react-native-vector-icons/ant-design";

const SplashScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F0FBFF",
      }}
    >
      <View style={{
        gap: 25,
        width: '80%',
        alignItems: 'center'
      }}>
        <View
          style={{
            backgroundColor: "#DCF3FE",
            padding: 10,
            borderRadius: 40,
          }}
        >
          <Text>Weather that feels instant</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: 'center',
            gap: 20
          }}
        >
          <View
            style={{
              backgroundColor: "#FFF",
              padding: 30,
              borderRadius: 30,
            }}
          >
            <AntDesign name="sun" size={40} color={'#EABF5E'}/>
          </View>
          <Text style={{
            fontWeight: 'bold',
            fontSize: 30
          }}>
            SkyCast
          </Text>
        </View>
        <Text>
            Preparing your local forecast...
        </Text>
        <View style={{
            backgroundColor: '#F3F7FB',
            borderWidth: 1,
            borderColor: '#D8EAF6',
            borderRadius: 10,
            width: '90%',
            height: 10,
            padding: 1
        }}>
            <View style={{
                height: '100%',
                width: '50%',
                backgroundColor: '#0D65C3',
                borderRadius: 10
            }}/>
        </View>
      </View>
    </View>
  );
};

export default SplashScreen;
