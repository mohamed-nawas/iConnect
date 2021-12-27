import React from "react";
import { Button, KeyboardAvoidingView, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import MailInput from "../components/MailInput";
import PasswordInput from "../components/PasswordInput";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NameInput from "../components/NameInput";
import { AuthContext } from "../navigation/AuthProvider";

const SignUp = ({ navigation, route }) => {
  const [name, setName] = React.useState("");
  const [mail, setMail] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [confirmPwd, setConfirmPwd] = React.useState("");

  const { phone } = route.params ? route.params : "";
  const { emailRegister } = React.useContext(AuthContext);

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
        <NameInput
          color="#9798ac"
          placeholder="Enter your name"
          value={name}
          onChangeText={(value) => setName(value)}
        />
      </View>
      <View style={{ marginBottom: 25 }}>
        <MailInput
          color="#9798ac"
          placeholder="mgmnawas@gmail.com"
          value={mail}
          onChangeText={(value) => setMail(value)}
        />
      </View>
      <View style={{ marginBottom: 25 }}>
        <PasswordInput
          color="#9798ac"
          placeholder="password"
          value={pwd}
          onChangeText={(value) => setPwd(value)}
        />
      </View>
      <View style={{ marginBottom: 10 }}>
        <PasswordInput
          color="#9798ac"
          placeholder="confirm password"
          value={confirmPwd}
          onChangeText={(value) => setConfirmPwd(value)}
        />
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
        onPress={() => {
          name && mail && pwd && confirmPwd && pwd === confirmPwd
            ? emailRegister(mail, pwd, phone, name)
            : alert("plz check");
        }}
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
