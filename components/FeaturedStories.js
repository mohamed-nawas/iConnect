import React from "react";
import { View, Text, FlatList } from "react-native";
import StoryIcon from "./StoryIcon";
import { Stories } from "../others/Stories";

const FeaturedStories = () => {
  return (
    <View // featured story view
      style={{
        width: "100%",
        height: 105,
        justifyContent: "space-between",
        alignItems: "flex-start",
        paddingHorizontal: 20,
      }}
    >
      <Text style={{ fontWeight: "bold", fontSize: 17, color: "#231454" }}>
        Featured Stories
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={Stories}
          renderItem={({ item }) => (
            <StoryIcon name={item.name} image={item.image} />
          )}
        />
      </View>
    </View>
  );
};

export default FeaturedStories;
