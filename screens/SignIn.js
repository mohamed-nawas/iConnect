import React from "react";
import { Button, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import MailInput from "../components/MailInput";
import PasswordInput from "../components/PasswordInput";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignIn = ({ navigation }) => {
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
          marginBottom: 80,
        }}
      >
        Please enter your information below to login to your account
      </Text>
      <View style={{ marginBottom: 25 }}>
        <MailInput color="#9798ac" placeholder="mgmnawas@gmail.com" />
      </View>
      <View style={{ marginBottom: 10 }}>
        <PasswordInput color="#9798ac" placeholder="password" />
      </View>
      <View style={{ marginBottom: 25 }}>
        <Button
          title="Forgot Password?"
          onPress={async () => {
            AsyncStorage.clear();
            alert("Async Storage Wiped");
          }}
        />
      </View>
      <CustomButton
        buttonTitle="Sign In"
        color="#fff"
        backgroundColor="#643ade"
      />
      <View style={{ marginTop: 30 }}>
        <Button
          title="Don't have an account?"
          onPress={() => {
            navigation.navigate("Phone");
          }}
        />
      </View>
    </View>
  );
};

export default SignIn;
