import React from "react";
import { View, Text, Image, ImageBackground, Dimensions } from "react-native";

const PhotosCard = (photosarr) => {
  if (photosarr.photosarr.length === 0) {
    return null;
  }
  if (photosarr.photosarr.length === 1) {
    return (
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
          <Text style={{ fontSize: 15, fontWeight: "bold", marginBottom: 20 }}>
            Photos
          </Text>
          <View
            style={{
              width: "100%",
              height: 150,
              flexDirection: "row",
              justifyContent: "center",
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
                source={{
                  uri: photosarr.photosarr[photosarr.photosarr.length - 1],
                }}
                style={{ width: "100%", height: "100%", borderRadius: 10 }}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
  if (photosarr.photosarr.length === 2) {
    return (
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
          <Text style={{ fontSize: 15, fontWeight: "bold", marginBottom: 20 }}>
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
                source={{
                  uri: photosarr.photosarr[photosarr.photosarr.length - 1],
                }}
                style={{ width: "100%", height: "100%", borderRadius: 10 }}
              />
            </View>
            <View
              style={{
                width: "48%",
                height: "100%",
              }}
            >
              <Image
                source={{
                  uri: photosarr.photosarr[photosarr.photosarr.length - 2],
                }}
                style={{ width: "100%", height: "100%", borderRadius: 10 }}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
  if (photosarr.photosarr.length === 3) {
    return (
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
          <Text style={{ fontSize: 15, fontWeight: "bold", marginBottom: 20 }}>
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
                source={{
                  uri: photosarr.photosarr[photosarr.photosarr.length - 1],
                }}
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
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={{
                    uri: photosarr.photosarr[photosarr.photosarr.length - 2],
                  }}
                  style={{
                    width: 72,
                    height: "100%",
                    borderRadius: 5,
                  }}
                />
              </View>
              <View
                style={{
                  width: "100%",
                  height: "48%",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={{
                    uri: photosarr.photosarr[photosarr.photosarr.length - 3],
                  }}
                  style={{
                    width: 72,
                    height: "100%",
                    borderRadius: 5,
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
  if (photosarr.photosarr.length === 4) {
    return (
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
          <Text style={{ fontSize: 15, fontWeight: "bold", marginBottom: 20 }}>
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
                source={{
                  uri: photosarr.photosarr[photosarr.photosarr.length - 1],
                }}
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
                    source={{
                      uri: photosarr.photosarr[photosarr.photosarr.length - 2],
                    }}
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
                    source={{
                      uri: photosarr.photosarr[photosarr.photosarr.length - 3],
                    }}
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
                  justifyContent: "center",
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
                    source={{
                      uri: photosarr.photosarr[photosarr.photosarr.length - 4],
                    }}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 5,
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
  if (photosarr.photosarr.length === 5) {
    return (
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
          <Text style={{ fontSize: 15, fontWeight: "bold", marginBottom: 20 }}>
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
                source={{
                  uri: photosarr.photosarr[photosarr.photosarr.length - 1],
                }}
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
                    source={{
                      uri: photosarr.photosarr[photosarr.photosarr.length - 2],
                    }}
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
                    source={{
                      uri: photosarr.photosarr[photosarr.photosarr.length - 3],
                    }}
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
                    source={{
                      uri: photosarr.photosarr[photosarr.photosarr.length - 4],
                    }}
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
                    source={{
                      uri: photosarr.photosarr[photosarr.photosarr.length - 5],
                    }}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 5,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  ></ImageBackground>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
  return (
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
        <Text style={{ fontSize: 15, fontWeight: "bold", marginBottom: 20 }}>
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
              source={{
                uri: photosarr.photosarr[photosarr.photosarr.length - 1],
              }}
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
                  source={{
                    uri: photosarr.photosarr[photosarr.photosarr.length - 2],
                  }}
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
                  source={{
                    uri: photosarr.photosarr[photosarr.photosarr.length - 3],
                  }}
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
                  source={{
                    uri: photosarr.photosarr[photosarr.photosarr.length - 4],
                  }}
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
                  source={{
                    uri: photosarr.photosarr[photosarr.photosarr.length - 5],
                  }}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 5,
                    justifyContent: "center",
                    alignItems: "center",
                    opacity: 0.2,
                  }}
                />
                <Text
                  style={{
                    color: "#000",
                    fontSize: 20,
                    fontWeight: "bold",
                    position: "absolute",
                    top: 25,
                    left: 25,
                  }}
                >
                  +{photosarr.photosarr.length - 4}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PhotosCard;
