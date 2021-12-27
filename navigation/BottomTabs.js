import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import Profile from "../screens/Profile";
import Home from "../screens/Home";
import Setting from "../screens/Setting";
import Notification from "../screens/Notification";
import Conversation from "../screens/Conversation";
import Svg, { Path } from "react-native-svg";
import Entypo from "react-native-vector-icons/Entypo";

const BottomTab = createBottomTabNavigator();

const TabBg = ({ color = "#FFFFFF", ...props }) => {
  return (
    <Svg width={349} height={83} viewBox="0 0 75 66" {...props}>
      {/* <Path
        d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
        fill={color}
      /> */}
      <Path
        d="M 75.2 0 H 225.6 v 90 H -150.4 V 0 H 0 c 4.1 0 7.4 3.1 7.9 7.1 C 10 21.7 22.5 33 37.7 33 c 15.2 0 27.7 -11.3 29.7 -25.9 c 0.5 -4 3.9 -7.1 7.9 -7.1 h -0.1 z"
        fill={color}
      />
    </Svg>
  );
};

const TabBarAdvancedButton = ({ bgColor, onPress }) => {
  return (
    <View
      style={{ position: "relative", alignItems: "center", width: 75 }}
      pointerEvents="box-none"
    >
      <TouchableOpacity
        style={{
          top: -27.5,
          justifyContent: "center",
          alignItems: "center",
          width: 60,
          height: 60,
          borderRadius: 30,
          backgroundColor: "#e94f37",
        }}
        onPress={onPress}
      >
        <Entypo size={20} color="#f6f7eb" name="chat" />
      </TouchableOpacity>
    </View>
  );
};

const BottomTabs = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarBackground: () => (
          <View
            style={{
              position: "relative",
              alignItems: "center",
            }}
            pointerEvents="box-none"
          >
            <TabBg
              color="#fff"
              style={{ position: "absolute", top: 0, left: 0 }}
            />
          </View>
        ),
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom:
            Platform.OS === "ios"
              ? (Dimensions.get("window").width / 380) * 25
              : (Dimensions.get("window").width / 380) * 15,
          left:
            Platform.OS === "ios"
              ? (Dimensions.get("window").width / 380) * 20
              : (Dimensions.get("window").width / 380) * 15,
          right:
            Platform.OS === "ios"
              ? (Dimensions.get("window").width / 380) * 20
              : (Dimensions.get("window").width / 380) * 15,
          backgroundColor: "transparent",
          borderRadius: (Dimensions.get("window").width / 380) * 15,
          height:
            Platform.OS === "ios"
              ? (Dimensions.get("window").width / 380) * 83
              : (Dimensions.get("window").width / 380) * 80,
          ...style.shadow,
        },
      }}
    >
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                top: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../assets/profile.png")}
                style={{
                  tintColor: focused ? "#288fef" : "#081122",
                  width: 22,
                  height: 22,
                  resizeMode: "contain",
                }}
              />
              <Text
                style={{
                  color: focused ? "#288fef" : "#081122",
                  fontWeight: "bold",
                  fontSize: 12,
                }}
              >
                PROFILE
              </Text>
            </View>
          ),
        }}
      />
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                top: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../assets/home.png")}
                style={{
                  tintColor: focused ? "#288fef" : "#081122",
                  width: 22,
                  height: 22,
                  resizeMode: "contain",
                }}
              />
              <Text
                style={{
                  color: focused ? "#288fef" : "#081122",
                  fontWeight: "bold",
                  fontSize: 12,
                }}
              >
                HOME
              </Text>
            </View>
          ),
        }}
      />
      <BottomTab.Screen
        name="Conversation"
        component={Conversation}
        options={{
          tabBarButton: (props) => (
            <TabBarAdvancedButton
              bgColor="#ffffff" // background space color.
              {...props}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                top: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../assets/bell.png")}
                style={{
                  tintColor: focused ? "#288fef" : "#081122",
                  width: 22,
                  height: 22,
                  resizeMode: "contain",
                }}
              />
              <Text
                style={{
                  color: focused ? "#288fef" : "#081122",
                  fontWeight: "bold",
                  fontSize: 12,
                }}
              >
                MESSAGE
              </Text>
            </View>
          ),
        }}
      />
      <BottomTab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                top: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../assets/settings.png")}
                style={{
                  tintColor: focused ? "#288fef" : "#081122",
                  width: 22,
                  height: 22,
                  resizeMode: "contain",
                }}
              />
              <Text
                style={{
                  color: focused ? "#288fef" : "#081122",
                  fontWeight: "bold",
                  fontSize: 12,
                }}
              >
                SETTINGS
              </Text>
            </View>
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

const style = StyleSheet.create({
  shadow: {
    shadowColor: "#1f1f1f",
    shadowOffset: {
      width: -10,
      height: 15,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 6,
  },
});

export default BottomTabs;
