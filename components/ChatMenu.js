import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { getSortedChatUser, getUserData } from "../others/Functions";

const ChatMenu = ({ chats, navigation }) => {
  const mounted = React.useRef(true);
  const [sortedChats, setSortedChats] = React.useState(null);
  const chats1 = chats.map((c) => c);

  React.useEffect(() => {
    mounted.current = true;
    const chats2 = chats1.sort((a, b) => b.noofmsgs - a.noofmsgs);
    async function fetch() {
      const response = await getSortedChatUser(chats2);
      if (mounted.current) {
        setSortedChats(response);
      }
    }
    fetch();
    return () => (mounted.current = false);
  }, []);

  if (chats.length === 0) null;

  if (chats.length === 1) {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          height: 100,
          marginVertical: 10,
          // backgroundColor: "orange",
        }}
      >
        <TouchableOpacity
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            height: "80%",
          }}
        >
          <View
            style={{
              backgroundColor: "#929ba2",
              justifyContent: "center",
              alignItems: "center",
              width: 50,
              height: 50,
              borderRadius: 25,
            }}
          >
            <AntDesign name="videocamera" size={20} color="#231454" />
          </View>
          <Text style={{ fontWeight: "bold", color: "#231454" }}>
            Create Room
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ChatRoom", {
              userid: sortedChats ? sortedChats[0].userid : null,
            })
          }
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            height: "80%",
          }}
        >
          <View
            style={{
              backgroundColor: "#80b9f1",
              justifyContent: "center",
              alignItems: "center",
              width: 50,
              height: 50,
              borderRadius: 25,
            }}
          >
            <Image
              source={{
                uri: sortedChats
                  ? sortedChats[0].userimg
                  : "https://www.vhv.rs/dpng/d/188-1888496_tie-user-default-suit-display-contact-business-woman.png",
              }}
              style={{ width: 50, height: 50, borderRadius: 25 }}
            />
          </View>
          <Text style={{ fontWeight: "bold", color: "#231454" }}>
            {sortedChats ? sortedChats[0].name.split(" ")[0] : "Kevin"}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (chats.length === 2) {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          height: 100,
          marginVertical: 10,
          // backgroundColor: "orange",
        }}
      >
        <TouchableOpacity
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            height: "80%",
          }}
        >
          <View
            style={{
              backgroundColor: "#929ba2",
              justifyContent: "center",
              alignItems: "center",
              width: 50,
              height: 50,
              borderRadius: 25,
            }}
          >
            <AntDesign name="videocamera" size={20} color="#231454" />
          </View>
          <Text style={{ fontWeight: "bold", color: "#231454" }}>
            Create Room
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ChatRoom", {
              userid: sortedChats ? sortedChats[0].userid : null,
            })
          }
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            height: "80%",
          }}
        >
          <View
            style={{
              backgroundColor: "#80b9f1",
              justifyContent: "center",
              alignItems: "center",
              width: 50,
              height: 50,
              borderRadius: 25,
            }}
          >
            <Image
              source={{
                uri: sortedChats
                  ? sortedChats[0].userimg
                  : "https://www.vhv.rs/dpng/d/188-1888496_tie-user-default-suit-display-contact-business-woman.png",
              }}
              style={{ width: 50, height: 50, borderRadius: 25 }}
            />
          </View>
          <Text style={{ fontWeight: "bold", color: "#231454" }}>
            {sortedChats ? sortedChats[0].name.split(" ")[0] : "Kevin"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ChatRoom", {
              userid: sortedChats ? sortedChats[1].userid : null,
            })
          }
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            height: "80%",
          }}
        >
          <View
            style={{
              backgroundColor: "#80b9f1",
              justifyContent: "center",
              alignItems: "center",
              width: 50,
              height: 50,
              borderRadius: 25,
            }}
          >
            <Image
              source={{
                uri: sortedChats
                  ? sortedChats[1].userimg
                  : "https://www.vhv.rs/dpng/d/188-1888496_tie-user-default-suit-display-contact-business-woman.png",
              }}
              style={{ width: 50, height: 50, borderRadius: 25 }}
            />
          </View>
          <Text style={{ fontWeight: "bold", color: "#231454" }}>
            {sortedChats ? sortedChats[1].name.split(" ")[0] : "Emma"}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (chats.length === 3) {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          height: 100,
          marginVertical: 10,
          // backgroundColor: "orange",
        }}
      >
        <TouchableOpacity
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            height: "80%",
          }}
        >
          <View
            style={{
              backgroundColor: "#929ba2",
              justifyContent: "center",
              alignItems: "center",
              width: 50,
              height: 50,
              borderRadius: 25,
            }}
          >
            <AntDesign name="videocamera" size={20} color="#231454" />
          </View>
          <Text style={{ fontWeight: "bold", color: "#231454" }}>
            Create Room
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ChatRoom", {
              userid: sortedChats ? sortedChats[0].userid : null,
            })
          }
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            height: "80%",
          }}
        >
          <View
            style={{
              backgroundColor: "#80b9f1",
              justifyContent: "center",
              alignItems: "center",
              width: 50,
              height: 50,
              borderRadius: 25,
            }}
          >
            <Image
              source={{
                uri: sortedChats
                  ? sortedChats[0].userimg
                  : "https://www.vhv.rs/dpng/d/188-1888496_tie-user-default-suit-display-contact-business-woman.png",
              }}
              style={{ width: 50, height: 50, borderRadius: 25 }}
            />
          </View>
          <Text style={{ fontWeight: "bold", color: "#231454" }}>
            {sortedChats ? sortedChats[0].name.split(" ")[0] : "Kevin"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ChatRoom", {
              userid: sortedChats ? sortedChats[1].userid : null,
            })
          }
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            height: "80%",
          }}
        >
          <View
            style={{
              backgroundColor: "#80b9f1",
              justifyContent: "center",
              alignItems: "center",
              width: 50,
              height: 50,
              borderRadius: 25,
            }}
          >
            <Image
              source={{
                uri: sortedChats
                  ? sortedChats[1].userimg
                  : "https://www.vhv.rs/dpng/d/188-1888496_tie-user-default-suit-display-contact-business-woman.png",
              }}
              style={{ width: 50, height: 50, borderRadius: 25 }}
            />
          </View>
          <Text style={{ fontWeight: "bold", color: "#231454" }}>
            {sortedChats ? sortedChats[1].name.split(" ")[0] : "Emma"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ChatRoom", {
              userid: sortedChats ? sortedChats[2].userid : null,
            })
          }
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            height: "80%",
          }}
        >
          <View
            style={{
              backgroundColor: "#80b9f1",
              justifyContent: "center",
              alignItems: "center",
              width: 50,
              height: 50,
              borderRadius: 25,
            }}
          >
            <Image
              source={{
                uri: sortedChats
                  ? sortedChats[2].userimg
                  : "https://www.vhv.rs/dpng/d/188-1888496_tie-user-default-suit-display-contact-business-woman.png",
              }}
              style={{ width: 50, height: 50, borderRadius: 25 }}
            />
          </View>
          <Text style={{ fontWeight: "bold", color: "#231454" }}>
            {sortedChats ? sortedChats[2].name.split(" ")[0] : "Allen"}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        height: 100,
        marginVertical: 10,
        // backgroundColor: "orange",
      }}
    >
      <TouchableOpacity
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          height: "80%",
        }}
      >
        <View
          style={{
            backgroundColor: "#929ba2",
            justifyContent: "center",
            alignItems: "center",
            width: 50,
            height: 50,
            borderRadius: 25,
          }}
        >
          <AntDesign name="videocamera" size={20} color="#231454" />
        </View>
        <Text style={{ fontWeight: "bold", color: "#231454" }}>
          Create Room
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ChatRoom", {
            userid: sortedChats ? sortedChats[0].userid : null,
          })
        }
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          height: "80%",
        }}
      >
        <View
          style={{
            backgroundColor: "#80b9f1",
            justifyContent: "center",
            alignItems: "center",
            width: 50,
            height: 50,
            borderRadius: 25,
          }}
        >
          <Image
            source={{
              uri: sortedChats
                ? sortedChats[0].userimg
                : "https://www.vhv.rs/dpng/d/188-1888496_tie-user-default-suit-display-contact-business-woman.png",
            }}
            style={{ width: 50, height: 50, borderRadius: 25 }}
          />
        </View>
        <Text style={{ fontWeight: "bold", color: "#231454" }}>
          {sortedChats ? sortedChats[0].name.split(" ")[0] : "Kevin"}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ChatRoom", {
            userid: sortedChats ? sortedChats[1].userid : null,
          })
        }
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          height: "80%",
        }}
      >
        <View
          style={{
            backgroundColor: "#80b9f1",
            justifyContent: "center",
            alignItems: "center",
            width: 50,
            height: 50,
            borderRadius: 25,
          }}
        >
          <Image
            source={{
              uri: sortedChats
                ? sortedChats[1].userimg
                : "https://www.vhv.rs/dpng/d/188-1888496_tie-user-default-suit-display-contact-business-woman.png",
            }}
            style={{ width: 50, height: 50, borderRadius: 25 }}
          />
        </View>
        <Text style={{ fontWeight: "bold", color: "#231454" }}>
          {sortedChats ? sortedChats[1].name.split(" ")[0] : "Emma"}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ChatRoom", {
            userid: sortedChats ? sortedChats[2].userid : null,
          })
        }
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          height: "80%",
        }}
      >
        <View
          style={{
            backgroundColor: "#80b9f1",
            justifyContent: "center",
            alignItems: "center",
            width: 50,
            height: 50,
            borderRadius: 25,
          }}
        >
          <Image
            source={{
              uri: sortedChats
                ? sortedChats[2].userimg
                : "https://www.vhv.rs/dpng/d/188-1888496_tie-user-default-suit-display-contact-business-woman.png",
            }}
            style={{ width: 50, height: 50, borderRadius: 25 }}
          />
        </View>
        <Text style={{ fontWeight: "bold", color: "#231454" }}>
          {sortedChats ? sortedChats[2].name.split(" ")[0] : "Allen"}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ChatRoom", {
            userid: sortedChats ? sortedChats[3].userid : null,
          })
        }
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          height: "80%",
        }}
      >
        <View
          style={{
            backgroundColor: "#80b9f1",
            justifyContent: "center",
            alignItems: "center",
            width: 50,
            height: 50,
            borderRadius: 25,
          }}
        >
          <Image
            source={{
              uri: sortedChats
                ? sortedChats[3].userimg
                : "https://www.vhv.rs/dpng/d/188-1888496_tie-user-default-suit-display-contact-business-woman.png",
            }}
            style={{ width: 50, height: 50, borderRadius: 25 }}
          />
        </View>
        <Text style={{ fontWeight: "bold", color: "#231454" }}>
          {sortedChats ? sortedChats[3].name.split(" ")[0] : "Marie"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChatMenu;
