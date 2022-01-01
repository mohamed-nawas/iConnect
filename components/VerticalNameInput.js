import React from "react";
import { View, Text, TextInput } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

const VerticalNameInput = ({ label, color, placeholder, type, ...rest }) => {
  return (
    <View
      style={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        marginTop: 10,
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          marginLeft: 5,
          fontSize: 16,
          color: "#000",
        }}
      >
        {label}
      </Text>
      <View
        style={{
          marginTop: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: Platform.OS === "ios" ? 300 : 300,
          height: Platform.OS === "ios" ? 50 : 50,
          borderRadius: Platform.OS === "ios" ? 10 : 10,
          borderColor: color,
          borderWidth: 1,
        }}
      >
        <View
          style={{
            width: "15%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {type === "name" ? (
            <AntDesign name="user" color="#000" size={15} />
          ) : type === "mobile" ? (
            <AntDesign name="mobile1" color="#000" size={15} />
          ) : type === "location" ? (
            <EvilIcons name="location" color="#000" size={20} />
          ) : type === "caption" ? (
            <Ionicons
              name="information-circle-outline"
              color="#000"
              size={18}
            />
          ) : null}
        </View>
        <TextInput
          style={{ width: "85%", height: "100%" }}
          numberOfLines={1}
          placeholder={placeholder}
          placeholderTextColor={color}
          {...rest}
        />
      </View>
      {/* <View
        style={{
          width: 170,
          height: 50,
          borderColor: color,
          backgroundColor: "#f6f6f6",
          borderRadius: 10,
          borderWidth: 2,
          marginTop: 10,
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <TextInput style={{ marginLeft: 10 }} {...rest} />
      </View> */}
    </View>
  );
};

export default VerticalNameInput;
