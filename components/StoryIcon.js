import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const StoryIcon = ({ name, image }) => {
  return (
    <View
      style={{
        justifyContent: "space-between",
        alignItems: "center",
        width: 60,
        height: 70,
      }}
    >
      <TouchableOpacity
        style={{
          height: "60%",
          aspectRatio: 1,
          borderWidth: 1,
          borderColor: "#0fb8e2",
          borderRadius: 27,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={image}
          style={{ width: "90%", height: "90%", borderRadius: 19 }}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={{ fontSize: 14, fontWeight: "bold", color: "#302860" }}>
          {name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default StoryIcon;
