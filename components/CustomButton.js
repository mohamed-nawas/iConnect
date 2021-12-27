import React from "react";
import { Platform, Text, TouchableOpacity } from "react-native";

const CustomButton = ({ buttonTitle, color, backgroundColor, ...rest }) => {
  return (
    <TouchableOpacity
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: backgroundColor,
        width: Platform.OS === "ios" ? 300 : 300,
        height: Platform.OS === "ios" ? 50 : 50,
        borderRadius: Platform.OS === "ios" ? 10 : 10,
      }}
      {...rest}
    >
      <Text style={{ color: color, fontWeight: "bold", fontSize: 17 }}>
        {buttonTitle}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
