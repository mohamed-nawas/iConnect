import React from "react";
import { Image, Text, TextInput, View, TouchableOpacity } from "react-native";
import CountryCodeModal from "./CountryCodeModal";
import { Country } from "./Country";

const PhoneInput = ({ color, placeholder, setCode, ...rest }) => {
  const [isCountryCodePickerOpen, setIsCountryCodePickerOpen] =
    React.useState(false);
  const [selectedCountryId, setSelectedCountryId] = React.useState(68);
  const mounted = React.useRef(true);

  React.useEffect(() => {
    mounted.current = true;
    if (mounted.current) {
      setCode(Country[selectedCountryId].code);
    }
    return () => (mounted.current = false);
  }, [selectedCountryId]);

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: Platform.OS === "ios" ? 300 : 300,
        height: Platform.OS === "ios" ? 50 : 50,
        borderRadius: Platform.OS === "ios" ? 10 : 10,
        borderColor: color,
        borderWidth: 1,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          setIsCountryCodePickerOpen(true);
        }}
        style={{
          width: "30%",
          height: "100%",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "35%",
            aspectRatio: 1,
            borderRadius: 15,
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <Image
            source={Country[selectedCountryId].img}
            style={{ width: 50, height: 50 }}
          />
        </View>
        <View
          style={{
            width: "40%",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 12 }}>+</Text>
          <Text style={{ fontWeight: "bold", fontSize: 12 }}>
            {Country[selectedCountryId].code}
          </Text>
        </View>
        <View
          style={{
            width: 2,
            height: "60%",
            alignSelf: "center",
            backgroundColor: "#a7a9ab",
          }}
        />
      </TouchableOpacity>
      <TextInput
        style={{ width: "70%", height: "100%" }}
        numberOfLines={1}
        keyboardType="numeric"
        placeholder={placeholder}
        placeholderTextColor={color}
        autoCapitalize="none"
        {...rest}
      />
      <CountryCodeModal
        isVisble={isCountryCodePickerOpen}
        setVisible={setIsCountryCodePickerOpen}
        selectedCountry={setSelectedCountryId}
      />
    </View>
  );
};

export default PhoneInput;
