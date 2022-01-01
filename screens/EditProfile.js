import React from "react";
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  FlatList,
  Platform,
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import VerticalDateInput from "../components/VerticalDateInput";
import VerticalNameInput from "../components/VerticalNameInput";
import {
  createProfilePost,
  getUserData,
  updateUser,
} from "../others/Functions";
import { FloatingAction } from "react-native-floating-action";
import { AuthContext } from "../navigation/AuthProvider";
import BottomSheet from "reanimated-bottom-sheet";
import Animated from "react-native-reanimated";
import ImagePicker from "react-native-image-crop-picker";
import storage from "@react-native-firebase/storage";

const EditProfile = ({ navigation, route }) => {
  const [image, setImage] = React.useState(null);
  const [uploading, setUploading] = React.useState(false);
  const [transferred, setTransferred] = React.useState(0);
  const userid = route.params.userid;
  const { user } = React.useContext(AuthContext);
  // const [userData, setUserData] = React.useState(null);
  const [isBSOpen, setIsBSOpen] = React.useState(false);

  const bs = React.createRef();
  const fall = new Animated.Value(1);

  const [userData, setUserData] = React.useState({
    name: "",
    dob: "",
    phone: "",
    location: "",
    caption: "",
    userimg: null,
  });

  // const initialState = {
  //   name: userData ? (userData.name ? userData.name : "") : "",
  //   dob: userData ? (userData.dob ? userData.dob.toDate() : "") : "",
  //   phone: userData ? (userData.phone ? userData.phone : "") : "",
  //   location: userData ? (userData.location ? userData.location : "") : "",
  //   caption: userData ? (userData.caption ? userData.caption : "") : "",
  // };

  React.useEffect(() => {
    async function fetchData() {
      // const response = await getUserData(userid);
      // setUserData(response);
      const data = await getUserData(userid);
      setUserData({
        name: data.name ? data.name : "",
        dob: data.dob ? data.dob.toDate() : "",
        phone: data.phone ? data.phone : "",
        location: data.location ? data.location : "",
        caption: data.caption ? data.caption : "",
        userimg: data.userimg ? data.userimg : null,
      });
    }
    fetchData();
  }, []);

  const reducer = (state, action) => {
    switch (action.type) {
      case "nameInputChange":
        return {
          ...state,
          name: action.name,
        };
      case "dobInputChange":
        return {
          ...state,
          dob: action.dob,
        };
      case "phoneInputChange":
        return {
          ...state,
          phone: action.phone,
        };
      case "locationInputChange":
        return {
          ...state,
          location: action.location,
        };
      case "captionInputChange":
        return {
          ...state,
          caption: action.caption,
        };
      default:
        // If this reducer doesn't recognize the action type, or doesn't
        // care about this specific action, return the existing state unchanged
        return state;
    }
  };

  // const [data, dispatch] = React.useReducer(reducer, initialState);

  const nameInputChange = (value) => {
    dispatch({
      type: "nameInputChange",
      name: value,
    });
  };

  const dobInputChange = (date) => {
    dispatch({
      type: "dobInputChange",
      dob: date,
    });
  };

  const phoneInputChange = (value) => {
    dispatch({
      type: "phoneInputChange",
      phone: value,
    });
  };

  const locationInputChange = (value) => {
    dispatch({
      type: "locationInputChange",
      location: value,
    });
  };

  const captionInputChange = (value) => {
    dispatch({
      type: "captionInputChange",
      caption: value,
    });
  };

  const renderBottomSheetContent = () => (
    <View style={{ paddingTop: 20, padding: 20, backgroundColor: "#fff" }}>
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 27, height: 35 }}>Upload Photo</Text>
        <Text
          style={{ fontSize: 14, color: "gray", height: 30, marginBottom: 10 }}
        >
          Choose Profile Picture
        </Text>
      </View>
      <TouchableOpacity
        style={{
          padding: 13,
          borderRadius: 10,
          marginVertical: 7,
          alignItems: "center",
          backgroundColor: "#3a24c0",
        }}
        onPress={takePhotoFromCamera}
      >
        <Text style={{ fontSize: 17, fontWeight: "bold", color: "#fff" }}>
          Take Photo
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={choosePhotoFromLibrary}
        style={{
          padding: 13,
          borderRadius: 10,
          marginVertical: 7,
          alignItems: "center",
          backgroundColor: "#3a24c0",
        }}
      >
        <Text style={{ fontSize: 17, fontWeight: "bold", color: "#fff" }}>
          Choose From Library
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          padding: 13,
          borderRadius: 10,
          marginVertical: 7,
          alignItems: "center",
          backgroundColor: "#3a24c0",
        }}
        onPress={() => {
          bs.current.snapTo(1);
          setIsBSOpen(false);
        }}
      >
        <Text style={{ fontSize: 17, fontWeight: "bold", color: "#fff" }}>
          Cancel
        </Text>
      </TouchableOpacity>
    </View>
  );

  const renderBottomSheetHeader = () => (
    <View
      style={{
        backgroundColor: "#fff",
        shadowColor: "#333",
        shadowOffset: { width: -1, height: -3 },
        shadowRadius: 2,
        shadowOpacity: 0.4,
        elevation: Platform.OS === "android" ? 5 : 0,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      }}
    >
      <View style={{ alignItems: "center" }}>
        <View
          style={{
            width: 40,
            height: 8,
            borderRadius: 4,
            backgroundColor: "#00000040",
            marginBottom: 10,
          }}
        ></View>
      </View>
    </View>
  );

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      console.log(image.path);
      setImage(image.path);
    });
    bs.current.snapTo(1);
    setIsBSOpen(false);
  };

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      console.log(image.path);
      setImage(image.path);
    });
    bs.current.snapTo(1);
    setIsBSOpen(false);
  };

  const uploadImage = async () => {
    if (image === null) {
      return null;
    }
    const uploadUri = image;
    let filename = uploadUri.substring(uploadUri.lastIndexOf("/") + 1);

    // add timestamp to filename to differentiate files with same name uniquly
    const extension = filename.split(".").pop();
    const name = filename.split(".").slice(0, -1).join(".");
    filename = name + Date.now() + "." + extension;

    setUploading(true);
    setTransferred(0);
    const storageRef = storage().ref(`photos/${filename}`);
    const task = storageRef.putFile(uploadUri);
    task.on("state_changed", (taskSnapshot) => {
      console.log(
        `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`
      );
      setTransferred(
        Math.round(taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) *
          100
      );
    });
    try {
      await task;
      const url = await storageRef.getDownloadURL();
      setUploading(false);

      createProfilePost(userid, url);

      return url;
    } catch (e) {
      console.log(e);
      return null;
    }
  };

  const updateEditProfile = async () => {
    let imgUrl = await uploadImage();

    if (imgUrl === null && userData.userimg) {
      imgUrl = userData.userimg;
    }

    updateUser(userid, userData, imgUrl);
    alert("update successfull");
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <BottomSheet
        ref={bs}
        snapPoints={[449, 0]}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
        renderContent={renderBottomSheetContent}
        renderHeader={renderBottomSheetHeader}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <Animated.View
            style={{
              flex: 1,
              alignItems: "center",
              backgroundColor: "#fff",
              opacity: Animated.add(0.5, Animated.multiply(fall, 1.0)),
            }}
          >
            <TouchableOpacity
              onPress={() => {
                bs.current.snapTo(0);
                setIsBSOpen(true);
              }}
              style={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#f6f6f6",
                width: 120,
                height: 120,
                borderRadius: 60,
                position: "relative",
                marginTop: 15,
                marginBottom: 15,
              }}
            >
              <Image
                source={{
                  uri: image
                    ? image
                    : userData
                    ? userData.userimg ||
                      "https://www.vhv.rs/dpng/d/188-1888496_tie-user-default-suit-display-contact-business-woman.png"
                    : "https://www.vhv.rs/dpng/d/188-1888496_tie-user-default-suit-display-contact-business-woman.png",
                }}
                style={{ width: "98%", height: "98%", borderRadius: 59 }}
              />
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: 78,
                  right: 5,
                  backgroundColor: "#f6f6f6",
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                }}
              >
                <Entypo name="camera" color="#8000e3" size={18} />
              </View>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "90%",
                marginBottom: 10,
              }}
            >
              <VerticalNameInput
                type="name"
                label="Full Name"
                placeholder="Full name"
                color="#9798ac"
                placeholder="enter your full name"
                onChangeText={(value) =>
                  setUserData({ ...userData, name: value })
                }
                value={userData.name}
              />
              <VerticalDateInput
                label="Date of Birth"
                color="#9798ac"
                setUserData={setUserData}
                userData={userData}
              />
            </View>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "90%",
                marginBottom: 10,
              }}
            >
              <VerticalNameInput
                type="mobile"
                label="Mobile"
                color="#9798ac"
                placeholder="mobile number"
                onChangeText={(value) =>
                  setUserData({ ...userData, phone: value })
                }
                value={userData.phone}
              />
              <VerticalNameInput
                type="location"
                label="Location"
                color="#9798ac"
                placeholder="city and country"
                onChangeText={(value) =>
                  setUserData({ ...userData, location: value })
                }
                value={userData.location}
              />
            </View>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "90%",
                marginBottom: 10,
              }}
            >
              <VerticalNameInput
                type="caption"
                label="Profile Caption"
                color="#9798ac"
                placeholder="enter about yourself"
                onChangeText={(value) =>
                  setUserData({ ...userData, caption: value })
                }
                value={userData.caption}
              />
            </View>
          </Animated.View>
        )}
      />
      {isBSOpen ? null : (
        <View style={{ position: "relative", top: -90, left: 200 }}>
          <FloatingAction
            onPressMain={updateEditProfile}
            floatingIcon={<Entypo name="check" size={28} color="#fff" />}
          />
        </View>
      )}
    </View>
  );
};

export default EditProfile;
