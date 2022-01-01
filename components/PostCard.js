import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import Svg, { Path } from "react-native-svg";
import { getUserData } from "../others/Functions";

const CardBg = ({ color = "#000", ...props }) => {
  return (
    <Svg width={1092} height={156} viewBox="0 0 220000 10000" {...props}>
      <Path
        d="M 0 0 C 58 -5796 4877 -10092 10000 -10000 H 70000 V 0 H 0 z"
        fill={color}
      />
    </Svg>
  );
};

const PostCard = ({ item }) => {
  const [profileimg, setProfileimg] = React.useState(null);
  const [name, setName] = React.useState(null);
  const [location, setLocation] = React.useState(null);

  let post = item.post;
  if (item.isprofile) {
    post = "";
  }
  const liked = true;

  React.useEffect(() => {
    async function fetchUserData() {
      const data = await getUserData(item.userid);
      setProfileimg(data.userimg);
      setName(data.name);
      setLocation(data.location);
    }
    fetchUserData();
  }, []);

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        width: "100%",
        // height: 300,
        backgroundColor: "#fff",
        marginTop: 20,
        position: "relative",
      }}
    >
      <View // header view
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          height: 50,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <TouchableOpacity>
            <Image
              source={{ uri: profileimg }}
              style={{ width: 50, height: 50, borderRadius: 25 }}
            />
          </TouchableOpacity>
          <View
            style={{
              justifyContent: "center",
              alignItems: "flex-start",
              height: "100%",
              marginLeft: 10,
            }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <TouchableOpacity>
                <Text
                  style={{
                    color: "#231454",
                    fontWeight: "bold",
                    fontSize: 15,
                    marginBottom: 3,
                  }}
                >
                  {name}
                </Text>
              </TouchableOpacity>
              {item.isprofile ? (
                <Text
                  style={{
                    color: "#8e88a4",
                    fontSize: 12,
                    marginBottom: 3,
                    marginLeft: 5,
                  }}
                >
                  updated his profile
                </Text>
              ) : null}
            </View>
            <Text
              style={{ color: "#87889f", fontWeight: "bold", fontSize: 13 }}
            >
              {location}
            </Text>
          </View>
        </View>
        <TouchableOpacity>
          <Entypo name="dots-three-horizontal" size={20} />
        </TouchableOpacity>
      </View>
      {post ? (
        item.postimg ? (
          <View
            style={{
              height: 250,
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View // text view
              style={{ width: "100%", height: 65, justifyContent: "center" }}
            >
              <Text style={{ color: "#7b7c95" }}>{post}</Text>
            </View>
            <View // image view
              style={{ width: "100%" }}
            >
              <Image
                style={{ width: "100%", height: 185 }}
                resizeMode="cover"
                source={{ uri: item.postimg }}
              />
            </View>
          </View>
        ) : (
          <View
            style={{
              height: 65,
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 50,
            }}
          >
            <View // text view
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <Text style={{ color: "#7b7c95" }}>{post}</Text>
            </View>
          </View>
        )
      ) : item.isprofile ? (
        <View
          style={{
            height: 250,
            width: 250,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 5,
            backgroundColor: "#5a00c4",
            borderRadius: 125,
          }}
        >
          <Image
            style={{ width: 246, height: 246, borderRadius: 123 }}
            resizeMode="cover"
            source={{ uri: item.postimg }}
          />
        </View>
      ) : (
        <View
          style={{
            height: 250,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 10,
          }}
        >
          <Image
            style={{ width: "100%", height: 240 }}
            resizeMode="cover"
            source={{ uri: item.postimg }}
          />
        </View>
      )}
      <View // footer view
        style={{
          position: "absolute",
          top: post && !item.postimg ? 110 : 247,
          left: 23,
          alignItems: "center",
        }}
        pointerEvents="box-none"
      >
        <CardBg color="#fff" />
        <View
          style={{
            position: "absolute",
            top: 0,
            left: -3,
            paddingLeft: 30,
            paddingTop: 10,
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            width: 350,
            height: 53,
          }}
        >
          <TouchableOpacity
            style={{
              marginRight: 10,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {liked ? (
              <AntDesign
                name="heart"
                size={15}
                color="#f14547"
                style={{ marginRight: 5 }}
              />
            ) : (
              <AntDesign
                name="hearto"
                size={15}
                color="#828397"
                style={{ marginRight: 5 }}
              />
            )}
            <Text style={{ color: "#828397", fontWeight: "bold" }}>
              {item.likes}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginRight: 10,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesome
              name="comment-o"
              size={18}
              color="#828397"
              style={{ marginRight: 5 }}
            />
            <Text style={{ color: "#828397", fontWeight: "bold" }}>
              {item.comments}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginRight: 10,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Feather
              name="share"
              size={18}
              color="#828397"
              style={{ marginRight: 5 }}
            />
            <Text style={{ color: "#828397", fontWeight: "bold" }}>
              {item.share}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PostCard;
