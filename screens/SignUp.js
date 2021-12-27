import React from "react";
import { Button, KeyboardAvoidingView, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import MailInput from "../components/MailInput";
import PasswordInput from "../components/PasswordInput";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NameInput from "../components/NameInput";

const SignUp = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
      behavior="padding"
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
        Please enter your information below to login to your account
      </Text>
      <View style={{ marginBottom: 25 }}>
        <NameInput color="#9798ac" placeholder="Enter your name" />
      </View>
      <View style={{ marginBottom: 25 }}>
        <MailInput color="#9798ac" placeholder="mgmnawas@gmail.com" />
      </View>
      <View style={{ marginBottom: 25 }}>
        <PasswordInput color="#9798ac" placeholder="password" />
      </View>
      <View style={{ marginBottom: 10 }}>
        <PasswordInput color="#9798ac" placeholder="confirm password" />
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
        buttonTitle="Sign Up"
        color="#fff"
        backgroundColor="#643ade"
        onPress={() => navigation.navigate("Profile")}
      />
      <View style={{ marginTop: 30 }}>
        <Button
          title="Have an account, login here"
          onPress={() => {
            navigation.navigate("SignIn");
          }}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
