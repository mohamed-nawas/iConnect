import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../screens/Profile";
import Home from "../screens/Home";
import Notification from "../screens/Notification";
import Setting from "../screens/Setting";
import EditProfile from "../screens/EditProfile";
import Conversation from "../screens/Conversation";

const Stack = createStackNavigator();

export const ProfileStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          title: "Profile",
          headerBackTitle: "Back",
        }}
      />
    </Stack.Navigator>
  );
};

export const HomeStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export const ConversationStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Conversation"
        component={Conversation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export const MessageStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export const SettingsStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Setting"
        component={Setting}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};