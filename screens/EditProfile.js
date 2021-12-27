import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import VerticalNameInput from "../components/VerticalNameInput";

const EditProfile = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f6f6f6",
          width: 120,
          height: 120,
          borderRadius: 60,
          position: "relative",
        }}
      >
        <Image
          source={require("../assets/images/profile.jpg")}
          style={{ width: "98%", height: "98%", borderRadius: 59 }}
        />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: 85,
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
      <VerticalNameInput label="Full Name" color="#2e2e30" />
    </View>
  );
};

export default EditProfile;
