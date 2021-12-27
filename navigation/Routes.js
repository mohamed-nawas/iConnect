import React from "react";
import RNBootSplash from "react-native-bootsplash";
import AuthStack from "./AuthStack";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./AppStack";
import auth from "@react-native-firebase/auth";
import { AuthContext } from "./AuthProvider";

const Routes = () => {
  const [isFirstLaunch, setIsFirstLaunch] = React.useState();
  let routeName;

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = React.useState(true);
  const { user, setUser } = React.useContext(AuthContext);

  // Handle user state changes
  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    RNBootSplash.hide();
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;
