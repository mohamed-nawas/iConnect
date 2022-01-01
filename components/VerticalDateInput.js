import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import DatePicker from "react-native-date-picker";
import AntDesign from "react-native-vector-icons/AntDesign";

const VerticalDateInput = ({ label, color, setUserData, userData }) => {
  const [date, setDate] = React.useState(new Date());
  const [open, setOpen] = React.useState(false);

  return (
    <View
      style={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        marginTop: 10,
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          marginLeft: 5,
          fontSize: 16,
          color: "#000",
        }}
      >
        {label}
      </Text>
      <View
        style={{
          marginTop: 10,
          flexDirection: "row",
          justifyContent: "space-between",
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
          <AntDesign name="calendar" color="#000" size={15} />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "85%",
          }}
        >
          <Text style={{ marginLeft: 10 }}>
            {userData.dob
              ? userData.dob.toDateString()
              : new Date().toDateString()}
          </Text>
          <TouchableOpacity
            style={{ marginRight: 10 }}
            onPress={() => setOpen(true)}
          >
            <AntDesign name="caretdown" color="#000" size={12} />
          </TouchableOpacity>
        </View>
        <DatePicker
          maximumDate={new Date()}
          mode="date"
          modal
          open={open}
          date={userData.dob ? userData.dob : date}
          onConfirm={(date) => {
            setOpen(false);
            setDate(date);
            setUserData({ ...userData, dob: date });
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
      </View>
      {/* <View
        style={{
          width: 170,
          height: 50,
          borderColor: color,
          backgroundColor: "#f6f6f6",
          borderRadius: 10,
          borderWidth: 2,
          marginTop: 10,
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Text style={{ marginLeft: 10 }}>
            {userData.dob
              ? userData.dob.toDateString()
              : new Date().toDateString()}
          </Text>
          <TouchableOpacity
            style={{ marginRight: 10 }}
            onPress={() => setOpen(true)}
          >
            <AntDesign name="caretdown" color="#000" size={12} />
          </TouchableOpacity>
        </View>
        <DatePicker
          maximumDate={new Date()}
          mode="date"
          modal
          open={open}
          date={date ? date : new Date()}
          onConfirm={(date) => {
            setOpen(false);
            setDate(date);
            setUserData({
              ...userData,
              dob: date,
            });
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
      </View> */}
    </View>
  );
};

export default VerticalDateInput;
