import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import PostCard from "../components/PostCard";
import { getPosts, getUserData } from "../others/Functions";
import FeaturedStories from "../components/FeaturedStories";
import Status from "../components/Status";

const Home = ({ navigation, route }) => {
  const userid = route.params.userid;
  const [isPendingNot, setIsPendingNot] = React.useState(false);
  const [isPendingMsg, setIsPendingMsg] = React.useState(true);
  const [loading, setLoading] = React.useState(true);
  const [posts, setPosts] = React.useState();

  React.useEffect(() => {
    const getPosts1 = async () => {
      const posts = await getPosts();
      setPosts(posts);
    };
    getPosts1();
    navigation.addListener("focus", () => setLoading(!loading));
  }, [navigation, loading]);

  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: "#fff" }}>
      <View // header view
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 20,
          height: 70,
          width: "100%",
          marginTop: 30,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 25, color: "#231454" }}>
          Suitify
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
            width: 100,
          }}
        >
          {isPendingNot ? (
            <TouchableOpacity style={{ position: "relative" }}>
              <AntDesign name="bells" size={25} color="#3e3b6c" />
              <View
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  backgroundColor: "#fa3654",
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                }}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity>
              <AntDesign name="bells" size={25} color="#3e3b6c" />
            </TouchableOpacity>
          )}
          {isPendingMsg ? (
            <TouchableOpacity style={{ position: "relative" }}>
              <MaterialCommunityIcons
                name="telegram"
                size={30}
                color="#3e3b6c"
              />
              <View
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  backgroundColor: "#fa3654",
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                }}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="telegram"
                size={30}
                color="#3e3b6c"
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <FlatList
        style={{ width: "100%" }}
        showsVerticalScrollIndicator={false}
        data={posts}
        ListHeaderComponent={() => (
          <>
            <FeaturedStories />
            <Status userid={userid} />
          </>
        )}
        renderItem={({ item }) => (
          <View style={{ backgroundColor: "#f6f6f6" }}>
            <PostCard item={item} />
          </View>
        )}
      />
    </View>
  );
};

export default Home;
