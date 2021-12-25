import React from 'react';
import RNBootSplash from 'react-native-bootsplash';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SignIn from './screens/SignIn';
import AuthStack from './navigation/AuthStack';

const App = () => {
  const [isFirstLaunch, setIsFirstLaunch] = React.useState();

  React.useEffect(() => {
    // to check initial launch to show or not onboarding
    AsyncStorage.getItem('alreadyLaunched')
      .then(value => {
        if (value === null) {
          AsyncStorage.setItem('alreadyLaunched', 'true'); // No need to wait for `setItem` to finish, although you might want to handle errors
          setIsFirstLaunch(true);
        } else {
          setIsFirstLaunch(false);
        }
      })
      .then(() => RNBootSplash.hide());
  }, []);

  if (isFirstLaunch === true) {
    return <AuthStack />;
  } else {
    return <SignIn />;
  }
};

export default App;
