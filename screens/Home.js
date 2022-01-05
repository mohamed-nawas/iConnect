import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import PostCard from "../components/PostCard";
import { getMorePosts, getPosts } from "../others/Functions";
import FeaturedStories from "../components/FeaturedStories";
import Status from "../components/Status";
import Spinner from "react-native-loading-spinner-overlay";

const Home = ({ navigation }) => {
  const [isPendingNot, setIsPendingNot] = React.useState(false);
  const [isPendingMsg, setIsPendingMsg] = React.useState(true);
  const [loading, setLoading] = React.useState(true);
  const [posts, setPosts] = React.useState();
  const [postsPerLoad] = React.useState(4);
  const [startAfter, setStartAfter] = React.useState(Object);
  const [spinner, setSpinner] = React.useState(false);
  const [lastPost, setLastPost] = React.useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const mounted = React.useRef(true);

  React.useEffect(() => {
    mounted.current = true;
    if (mounted.current) {
      setLastPost(false);
    }
    const getPosts1 = async () => {
      await fetchPosts();
    };
    getPosts1();
    navigation.addListener("focus", () => setLoading(!loading));
    return () => (mounted.current = false);
  }, [navigation, loading]);

  const fetchPosts = async () => {
    setSpinner(true);
    const data = await getPosts(postsPerLoad);
    setPosts(data.posts);
    setStartAfter(data.lastVisible);
    setSpinner(false);
  };

  const fetchMorePosts = async () => {
    if (!lastPost) {
      setSpinner(true);
      const data = await getMorePosts(startAfter, postsPerLoad);
      setPosts([...posts, ...data.posts]);
      setStartAfter(data.lastVisible);
      data.posts.length == 0 ? setLastPost(true) : setLastPost(false);
      setSpinner(false);
    }
  };

  const renderFooter = () => {
    return !lastPost ? (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#F5FCFF",
        }}
      >
        <Spinner
          visible={spinner}
          textContent={"Loading..."}
          textStyle={{ color: "#FFF" }}
        />
      </View>
    ) : (
      <View
        style={{
          width: "100%",
          height: 50,
          backgroundColor: "#fff",
          justifyContent: "center",
          alignItems: "center",
          borderTopWidth: 1,
          borderTopColor: "#000",
        }}
      >
        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
          }}
        >
          No More posts to show
        </Text>
      </View>
    );
  };

  const handleRefresh = () => {
    setLastPost(false);
    fetchPosts();
    setRefreshing(false);
  };

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
          iConnect
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
            <Status />
          </>
        )}
        renderItem={({ item }) => (
          <View style={{ backgroundColor: "#f6f6f6" }}>
            <PostCard
              item={item}
              onPress={() =>
                navigation.navigate("Home_Profile", { userid: item.userid })
              }
            />
          </View>
        )}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        onEndReached={fetchMorePosts}
        onEndReachedThreshold={0.01}
        scrollEventThrottle={150}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
};

export default Home;
