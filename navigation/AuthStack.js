import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OnBoarding from "../screens/OnBoarding";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import HeaderBack from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";
import Phone from "../screens/Phone";

const Stack = createStackNavigator();

const AuthStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="OnBoarding"
        component={OnBoarding}
      />
      <Stack.Screen
        options={{
          headerTitle: "Sign In",
          headerBackTitleVisible: true,
          headerBackTitle: "Sign In",
          headerBackImage: () => (
            <TouchableOpacity style={{ marginLeft: 20 }}>
              <HeaderBack
                name="chevron-back-outline"
                size={25}
                color="#aeceff"
              />
            </TouchableOpacity>
          ),
        }}
        name="SignIn"
        component={SignIn}
      />
      <Stack.Screen
        options={{
          headerTitle: "Sign Up",
          headerBackTitleVisible: true,
          headerBackTitle: "Sign In",
          headerBackImage: () => (
            <TouchableOpacity style={{ marginLeft: 20 }}>
              <HeaderBack
                name="chevron-back-outline"
                size={25}
                color="#aeceff"
              />
            </TouchableOpacity>
          ),
        }}
        name="Phone"
        component={Phone}
      />
      <Stack.Screen
        options={{
          headerTitle: "Sign Up",
          headerBackTitleVisible: true,
          headerBackTitle: "Phone",
          headerBackImage: () => (
            <TouchableOpacity style={{ marginLeft: 20 }}>
              <HeaderBack
                name="chevron-back-outline"
                size={25}
                color="#aeceff"
              />
            </TouchableOpacity>
          ),
        }}
        name="SignUp"
        component={SignUp}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
