import React from "react";
import { Button, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import MailInput from "../components/MailInput";
import PasswordInput from "../components/PasswordInput";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../navigation/AuthProvider";

const SignIn = ({ navigation }) => {
  const [mail, setMail] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  const { emailLogin } = React.useContext(AuthContext);

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
        <MailInput
          color="#9798ac"
          placeholder="mgmnawas@gmail.com"
          value={mail}
          onChangeText={(value) => setMail(value)}
        />
      </View>
      <View style={{ marginBottom: 10 }}>
        <PasswordInput
          color="#9798ac"
          placeholder="password"
          value={pwd}
          onChangeText={(value) => setPwd(value)}
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
        buttonTitle="Sign In"
        color="#fff"
        backgroundColor="#643ade"
        onPress={() => {
          {
            mail && pwd
              ? emailLogin(mail, pwd)
              : alert("Please fill the information to proceed");
          }
        }}
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
