import React from "react";
import { TextInput, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

const NameInput = ({ color, placeholder, ...rest }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "flex-start",
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
        <AntDesign name="user" color="#000" size={25} />
      </View>
      <TextInput
        style={{ width: "85%", height: "100%" }}
        numberOfLines={1}
        placeholder={placeholder}
        placeholderTextColor={color}
        {...rest}
      />
    </View>
  );
};

export default NameInput;
