import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../screens/Profile";
import Home from "../screens/Home";
import Notification from "../screens/Notification";
import Setting from "../screens/Setting";
import Conversation from "../screens/Conversation";

const Stack = createStackNavigator();

const HomeStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Profile"
        component={Profile}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />

      {/* <Stack.Screen
        options={{ headerShown: false }}
        name="Conversation"
        component={Conversation}
      /> */}
      <Stack.Screen
        options={{ headerShown: false }}
        name="Notification"
        component={Notification}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Setting"
        component={Setting}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
