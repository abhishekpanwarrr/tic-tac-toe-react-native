import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";

const Box = ({ value }) => {
  console.log("🚀 ~ file: index.jsx ~ line 6 ~ Box ~ value", value);
  return (
    <View
      style={tw`text-white text-3xl bg-white w-24 h-22 mx-1 my-1 flex justify-center items-center`}
    >
      <Text
        style={tw`font-bold text-4xl ${
          value === "X" ? "text-green-500" : "text-red-800"
        }`}
      >
        {value}
      </Text>
    </View>
  );
};

export default Box;
