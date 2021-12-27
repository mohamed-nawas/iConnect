import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OnBoarding from "../screens/OnBoarding";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import HeaderBack from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";
import Phone from "../screens/Phone";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createStackNavigator();

const AuthStack = ({ navigation }) => {
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);
  let routeName;

  React.useEffect(() => {
    // to check initial launch to show or not onboarding
    AsyncStorage.getItem("alreadyLaunched").then((value) => {
      if (value === null) {
        AsyncStorage.setItem("alreadyLaunched", "true"); // No need to wait for `setItem` to finish, although you might want to handle errors
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch === true) {
    routeName = "OnBoarding";
  } else {
    routeName = "SignIn";
  }

  return (
    <Stack.Navigator initialRouteName={routeName}>
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
