import { LogBox, Keyboard } from "react-native";
LogBox.ignoreLogs(["EventEmitter.removeListener"]);
// Keyboard.addListener("keyboardWillShow").remove();

import React from "react";
import Providers from "./navigation";

const App = () => {
  return <Providers />;
};

export default App;
