import React from "react";
import { View, Text, TextInput } from "react-native";

const VerticalNameInput = ({ label, color, ...rest }) => {
  return (
    <View
      style={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          marginLeft: 5,
          fontSize: 16,
          color: color,
        }}
      >
        {label}
      </Text>
      <View
        style={{
          width: 300,
          height: 55,
          borderColor: color,
          backgroundColor: "#fff",
          borderRadius: 10,
          borderWidth: 1,
          marginTop: 10,
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <TextInput
          style={{ marginLeft: 10 }}
          placeholder="Enter your full name"
          {...rest}
        />
      </View>
    </View>
  );
};

export default VerticalNameInput;
