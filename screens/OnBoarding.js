import React from "react";
import { Image, View } from "react-native";
import Onboarding from "react-native-onboarding-swiper";

const OnBoarding = ({ navigation }) => {
  return (
    <Onboarding
      onSkip={() => navigation.replace("SignIn")}
      onDone={() => navigation.replace("SignIn")}
      pages={[
        {
          backgroundColor: "#fff",
          image: <Image source={require("../assets/images/onboarding1.png")} />,
          title: "Find Friends & Get Inspiration",
          subtitle:
            "Find friends on social platform ipsum dolar sit amet consectetur adipiscing elit.",
        },
        {
          backgroundColor: "#fff",
          image: <Image source={require("../assets/images/onboarding2.png")} />,
          title: "Connect With Wonderful People",
          subtitle:
            "Find friends on social platform ipsum dolar sit amet consectetur adipiscing elit.",
        },
        {
          backgroundColor: "#fff",
          image: <Image source={require("../assets/images/onboarding3.png")} />,
          title: "Attend Events & Hangout With Friends",
          subtitle:
            "Find friends on social platform ipsum dolar sit amet consectetur adipiscing elit.",
        },
      ]}
    />
  );
};

export default OnBoarding;
