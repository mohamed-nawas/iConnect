import React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from "react-native";
import EvilIcons from "react-native-vector-icons/EvilIcons";

const Profile = ({ navigation }) => {
  return (
    <FlatList
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
              source={require("../assets/images/profile.jpg")}
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
            Kevin Max
          </Text>
          <Text style={{ fontSize: 15, color: "#787a91" }}>@ekevin_max</Text>
          <View
            style={{ marginTop: 10, padding: 8, backgroundColor: "#f6f6f6" }}
          >
            <Text>Lifestyle photographer, traveler, dreamer</Text>
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
              onPress={() => navigation.navigate("SignUp")}
            >
              <EvilIcons name="gear" color="#333333" size={25} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: "100%",
              height: 250,
              justifyContent: "center",
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
                Photos
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
                    source={require("../assets/images/img03.jpg")}
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
                        source={require("../assets/images/img02.jpg")}
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
                        source={require("../assets/images/img01.jpg")}
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
                        source={require("../assets/images/img04.jpg")}
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
                        source={require("../assets/images/img05.jpg")}
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
    />
  );
};

export default Profile;