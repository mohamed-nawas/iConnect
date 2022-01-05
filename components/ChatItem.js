import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { AuthContext } from "../navigation/AuthProvider";
import { useIsFocused } from "@react-navigation/native";

const ChatItem = ({ item, navigation }) => {
  const { user } = React.useContext(AuthContext);

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("ChatRoom", {
          userid: item.userid,
        })
      }
    >
      <View
        style={{
          width: "100%",
          height: 100,
          backgroundColor: "#fff",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "15%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            // marginLeft: "10%",
          }}
        >
          <Image
            source={{
              uri: item.userimg,
            }}
            style={{ width: 52, height: 52, borderRadius: 26 }}
          />
        </View>
        <View
          style={{
            width: "65%",
            height: "100%",
            justifyContent: "center",
            alignItems: "flex-start",
            marginLeft: 15,
          }}
        >
          <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
          <Text
            style={{
              color: item.latestmsgsender === user.uid ? "#787a91" : "#231454",
            }}
          >
            {item.latestmsg}
          </Text>
        </View>
        <View
          style={{
            width: "10%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <Text style={{ fontSize: 10 }}>{item.latestmsgtime}</Text>
          {item.unreadMsgs !== 0 ? (
            <View
              style={{
                backgroundColor: "#00dc00",
                width: 24,
                height: 24,
                borderRadius: 12,
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                top: 40,
                left: -28,
              }}
            >
              <Text style={{ color: "#fff", fontWeight: "bold" }}>
                {item.unreadMsgs}
              </Text>
            </View>
          ) : null}
        </View>
      </View>
      <View style={{ width: "100%", height: 2, backgroundColor: "#f6f6f6" }} />
    </TouchableOpacity>
  );
};

export default ChatItem;
