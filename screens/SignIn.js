import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, Button } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const SignIn = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>SignIn.js</Text>
      <Button
        onPress={async () => {
          AsyncStorage.clear();
          alert("Async Storage wiped");
        }}
        title="Clear Async Storage"
      />
      <Icon name="facebook-square" size={30} />
    </View>
  );
};

export default SignIn;
