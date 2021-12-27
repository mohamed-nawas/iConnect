import React from "react";
import { Platform, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import PhoneInput from "../components/PhoneInput";

const Phone = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <Text
        style={{
          color: "#4464f8",
          fontWeight: "bold",
          fontSize: 30,
          marginBottom: 20,
        }}
      >
        iConnect
      </Text>
      <Text
        style={{
          color: "#000",
          fontSize: 17,
          textAlign: "center",
          marginBottom: 50,
        }}
      >
        Please enter your phone number
      </Text>
      <View style={{ marginBottom: 25 }}>
        <PhoneInput placeholder="Enter your phone number" />
      </View>
      <CustomButton
        buttonTitle="Save"
        color="#fff"
        backgroundColor="#643ade"
        onPress={() => navigation.navigate("SignUp")}
      />
      <View
        style={{
          borderWidth: 1.5,
          borderColor: "#643ade",
          borderRadius: Platform.OS === "ios" ? 10 : 10,
          marginTop: 10,
        }}
      >
        <CustomButton
          buttonTitle="Skip"
          color="#4c3af6"
          backgroundColor="#fff"
          onPress={() => navigation.navigate("SignUp")}
        />
      </View>
    </View>
  );
};

export default Phone;
