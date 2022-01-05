import React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import PhotosCard from "../components/PhotosCard";
import { AuthContext } from "../navigation/AuthProvider";
import {
  getMoreUserPosts,
  getUserData,
  getUserPosts,
} from "../others/Functions";
import Spinner from "react-native-loading-spinner-overlay";
import PostCard from "../components/PostCard";

const Profile = ({ navigation }) => {
  const [userData, setUserData] = React.useState();
  const [loading, setLoading] = React.useState(true);
  const { user, logout } = React.useContext(AuthContext);
  const mounted = React.useRef(true);
  const [refreshing, setRefreshing] = React.useState(false);
  const [startAfter, setStartAfter] = React.useState(Object);
  const [spinner, setSpinner] = React.useState(false);
  const [posts, setPosts] = React.useState(new Array());
  const [lastPost, setLastPost] = React.useState(false);

  React.useEffect(() => {
    mounted.current = true;
    if (mounted.current) {
      setLastPost(false);
    }
    async function fetch() {
      const data = await getUserData(user.uid);
      if (mounted.current) {
        setUserData({
          name: data.name,
          caption: data.caption,
          userimg: data.userimg,
          photos: data.photos, // this returns an array
        });
      }
    }
    fetch();
    const getUserPosts1 = async () => {
      await fetchUserPosts();
    };
    getUserPosts1();
    navigation.addListener("focus", () => setLoading(!loading));
    return () => (mounted.current = false);
  }, [navigation, loading]);

  const fetchUserPosts = async () => {
    setSpinner(true);
    const data = await getUserPosts(user.uid, 4);
    setPosts(data.posts);
    setStartAfter(data.lastVisible);
    setSpinner(false);
  };

  const fetchMoreUserPosts = async () => {
    if (!lastPost) {
      setSpinner(true);
      const data = await getMoreUserPosts(user.uid, startAfter, 4);
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
    fetchUserPosts();
    setRefreshing(false);
  };

  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => (
        <View style={{ backgroundColor: "#f6f6f6" }}>
          <PostCard item={item} />
        </View>
      )}
      ListHeaderComponent={() => (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            backgroundColor: "#fff",
          }}
        >
          <Image
            source={require("../assets/images/cover.jpg")}
            style={{
              width: "100%",
              height: 200,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
            }}
          />
          <View
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              borderColor: "#fff",
              borderWidth: 3,
              position: "relative",
              top: -50,
              overflow: "hidden",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={{
                uri: userData
                  ? userData.userimg ||
                    "https://www.vhv.rs/dpng/d/188-1888496_tie-user-default-suit-display-contact-business-woman.png"
                  : "https://www.vhv.rs/dpng/d/188-1888496_tie-user-default-suit-display-contact-business-woman.png",
              }}
              style={{
                width: 96,
                height: 96,
                borderRadius: 48,
              }}
            />
          </View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 23,
              color: "#231454",
              marginTop: -35,
            }}
          >
            {userData ? userData.name : null}
          </Text>
          <Text style={{ fontSize: 15, color: "#787a91" }}>@ekevin_max</Text>
          <View
            style={{ marginTop: 10, padding: 8, backgroundColor: "#f6f6f6" }}
          >
            <Text>{userData ? userData.caption : null}</Text>
          </View>
          <View
            style={{
              width: "80%",
              height: 50,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <View
              style={{
                width: "25%",
                height: "100%",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>100</Text>
              <Text style={{ fontSize: 15 }}>Posts</Text>
            </View>
            <View
              style={{
                width: "25%",
                height: "100%",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>230</Text>
              <Text style={{ fontSize: 15 }}>Photos</Text>
            </View>
            <View
              style={{
                width: "25%",
                height: "100%",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>10K</Text>
              <Text style={{ fontSize: 15 }}>Followers</Text>
            </View>
            <View
              style={{
                width: "25%",
                height: "100%",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>64</Text>
              <Text style={{ fontSize: 15 }}>Following</Text>
            </View>
          </View>
          <View
            style={{
              width: "80%",
              height: 35,
              marginTop: 20,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <TouchableOpacity
              style={{
                width: "85%",
                height: "100%",
                borderWidth: 2,
                borderColor: "#dbdde0",
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => navigation.navigate("EditProfile")}
            >
              <Text style={{ fontWeight: "bold" }}>EDIT PROFILE</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: "10%",
                height: "100%",
                borderWidth: 2,
                borderColor: "#dbdde0",
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => logout()}
            >
              <MaterialCommunityIcons name="logout" color="#333333" size={20} />
            </TouchableOpacity>
          </View>
          {userData ? (
            userData.photos ? (
              <PhotosCard photosarr={userData.photos} />
            ) : null
          ) : null}
          <View
            style={{
              width: "100%",
              height: 250,
              justifyContent: "flex-start",
              alignItems: "center",
              backgroundColor: "#f6f6f6",
            }}
          >
            <View
              style={{
                backgroundColor: "#fff",
                width: "90%",
                height: "90%",
                justifyContent: "center",
                alignItems: "flex-start",
                paddingHorizontal: "5%",
              }}
            >
              <Text
                style={{ fontSize: 15, fontWeight: "bold", marginBottom: 20 }}
              >
                Videos
              </Text>
              <View
                style={{
                  width: "100%",
                  height: 150,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: "48%",
                    height: "100%",
                  }}
                >
                  <Image
                    source={require("../assets/images/img05.jpg")}
                    style={{ width: "100%", height: "100%", borderRadius: 10 }}
                  />
                </View>
                <View
                  style={{
                    width: "48%",
                    height: "100%",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      width: "100%",
                      height: "48%",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        width: "48%",
                        height: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        source={require("../assets/images/img03.jpg")}
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: 5,
                        }}
                      />
                    </View>
                    <View
                      style={{
                        width: "48%",
                        height: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        source={require("../assets/images/img04.jpg")}
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: 5,
                        }}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      width: "100%",
                      height: "48%",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        width: "48%",
                        height: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        source={require("../assets/images/img01.jpg")}
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: 5,
                        }}
                      />
                    </View>
                    <View
                      style={{
                        width: "48%",
                        height: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <ImageBackground
                        source={require("../assets/images/img02.jpg")}
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: 5,
                          opacity: 0.5,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Text style={{ fontWeight: "bold", color: "#000" }}>
                          +20
                        </Text>
                      </ImageBackground>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      )}
      showsVerticalScrollIndicator={false}
      refreshing={refreshing}
      onRefresh={handleRefresh}
      onEndReached={fetchMoreUserPosts}
      onEndReachedThreshold={0.01}
      scrollEventThrottle={150}
      ListFooterComponent={renderFooter}
    />
  );
};

export default Profile;
