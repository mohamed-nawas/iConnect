import React from "react";
import {
  View,
  Text,
  Modal,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { Country } from "./Country";
import { FloatingAction } from "react-native-floating-action";
import Entypo from "react-native-vector-icons/Entypo";

const CountryCodeModal = ({ isVisble, setVisible, selectedCountry }) => {
  const [selectedItem, setSelectedItem] = React.useState();

  return (
    <Modal visible={isVisble} animationType="slide">
      <View style={{ flex: 1, marginTop: 80 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={Country}
          renderItem={({ item }) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => {
                setSelectedItem(item.id);
                selectedCountry(item.id - 1);
              }}
              style={{
                width: "100%",
                height: 50,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                borderColor: "#4842f6",
                backgroundColor: selectedItem === item.id ? "#4842f6" : "#fff",
                borderWidth: 1,
                marginBottom: 5,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "hidden",
                    marginLeft: 20,
                    marginRight: 50,
                  }}
                >
                  <Image
                    source={item.img}
                    style={{
                      width: 50,
                      height: 50,
                    }}
                  />
                </View>
                <Text
                  style={{
                    color: selectedItem === item.id ? "#fff" : "#000",
                    fontWeight: "bold",
                  }}
                >
                  {item.name}
                </Text>
              </View>
              <Text
                style={{
                  fontWeight: "bold",
                  marginRight: 20,
                  color: selectedItem === item.id ? "#fff" : "#000",
                }}
              >
                +{item.code}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <FloatingAction
        onPressMain={() => setVisible(false)}
        floatingIcon={<Entypo name="check" size={28} color="#fff" />}
      />
    </Modal>
  );
};

export default CountryCodeModal;
