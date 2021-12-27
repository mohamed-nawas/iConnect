import React from "react";
import auth from "@react-native-firebase/auth";
import { createUser } from "../others/Functions";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        emailLogin: async (mail, pwd) => {
          try {
            await auth().signInWithEmailAndPassword(mail, pwd);
          } catch (e) {
            console.log(e);
          }
        },
        emailRegister: (mail, pwd, phone, name) => {
          auth()
            .createUserWithEmailAndPassword(mail, pwd)
            .then((userCredential) => {
              var userid = userCredential.user.uid;
              createUser(name, mail, phone, pwd, userid);
            })
            .catch((e) => console.log(e));
        },
        logout: () => {
          auth()
            .signOut()
            .then()
            .catch((e) => console.log(e));
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
