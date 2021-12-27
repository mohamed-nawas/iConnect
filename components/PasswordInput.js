import React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";

const PasswordInput = ({ color, placeholder, ...rest }) => {
  const [isSecureEntry, setIsSecureEntry] = React.useState(true);

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
      <View
        style={{
          width: "15%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Ionicons name="lock-closed-outline" color="#000" size={25} />
      </View>
      <TextInput
        style={{ width: "70%", height: "100%" }}
        numberOfLines={1}
        placeholder={placeholder}
        placeholderTextColor={color}
        autoCapitalize="none"
        secureTextEntry={isSecureEntry}
        {...rest}
      />
      <TouchableOpacity
        onPress={() => setIsSecureEntry(!isSecureEntry)}
        style={{
          width: "15%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {isSecureEntry ? (
          <Feather name="eye-off" color="#000" size={20} />
        ) : (
          <Feather name="eye" color="#000" size={20} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default PasswordInput;
