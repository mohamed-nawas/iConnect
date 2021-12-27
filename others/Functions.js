// firestore functions
import firestore from "@react-native-firebase/firestore";

export const createUser = (name, mail, phone, pwd, userid) => {
  firestore()
    .collection("Users")
    .add({
      userid: userid,
      name: name,
      mail: mail,
      pwd: pwd,
      phone: phone,
    })
    .then(() => console.log("User added to collection"))
    .catch((e) => console.log(e));
};
