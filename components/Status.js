import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Entypo from "react-native-vector-icons/Entypo";
import { getUserData, createPost } from "../others/Functions";
import ImagePicker from "react-native-image-crop-picker";
import storage from "@react-native-firebase/storage";

const Status = ({ userid }) => {
  const [userData, setUserData] = React.useState();
  const [image, setImage] = React.useState(null);
  const [post, setPost] = React.useState("");
  const [uploading, setUploading] = React.useState(false);
  const [transferred, setTransferred] = React.useState(0);

  React.useEffect(() => {
    async function fetchUser() {
      const data = await getUserData(userid);
      setUserData(data);
    }
    fetchUser();
  }, []);

  const handleImagePick = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      setImage(image.path);
    });
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

      return url;
    } catch (e) {
      console.log(e);
      return null;
    }
  };

  const handlePost = async () => {
    let imgUrl = await uploadImage();

    if (imgUrl && !post) {
      createPost(userid, imgUrl, "");
      setPost("");
      setImage(null);
      alert("Post added successfully");
    }
    if (post && !imgUrl) {
      createPost(userid, null, post);
      setPost("");
      setImage(null);
      alert("Post added successfully");
    }
    if (post && imgUrl) {
      createPost(userid, imgUrl, post);
      setPost("");
      setImage(null);
      alert("Post added successfully");
    }
  };

  return (
    <View // status view
      style={{
        width: "100%",
        height: image ? 550 : 100,
        paddingHorizontal: 20,
        marginTop: 10,
        justifyContent: "center",
        // backgroundColor: "orange",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: "100%",
          height: 55,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Image
          style={{
            width: 38,
            height: 38,
            borderRadius: 19,
            marginRight: 20,
          }}
          source={{
            uri: userData
              ? userData.userimg ||
                "https://www.vhv.rs/dpng/d/188-1888496_tie-user-default-suit-display-contact-business-woman.png"
              : "https://www.vhv.rs/dpng/d/188-1888496_tie-user-default-suit-display-contact-business-woman.png",
          }}
        />
        <TextInput
          style={{ width: 250, height: 45 }}
          placeholder="what's on your mind?"
          placeholderTextColor="#2d2d2f"
          value={post}
          onChangeText={(value) => setPost(value)}
        />
      </View>
      {image ? (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: 450,
            // backgroundColor: "red",
          }}
        >
          <Image
            source={{ uri: image }}
            style={{ width: 300, height: 400 }}
            resizeMode="cover"
          />
        </View>
      ) : null}
      <View
        style={{
          width: "100%",
          height: 45,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            height: "100%",
            width: 180,
          }}
        >
          <TouchableOpacity onPress={handleImagePick}>
            <FontAwesome name="photo" size={20} />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name="videocamera" size={20} />
          </TouchableOpacity>
          <TouchableOpacity>
            <EvilIcons name="location" size={25} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo name="emoji-happy" size={20} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={handlePost}
          disabled={!post && !image ? true : false}
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: 100,
            height: 40,
            backgroundColor: "#3a24c0",
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
            Post
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Status;
