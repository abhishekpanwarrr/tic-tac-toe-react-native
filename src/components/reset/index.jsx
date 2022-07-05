import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
const Reset = ({ resetBoard }) => {
  return (
    <TouchableOpacity
      onPress={resetBoard}
      style={tw`bg-blue-500 px-8 py-3 mt-8 rounded-md`}
    >
      <Text style={tw`text-white text-3xl`}>Reset</Text>
    </TouchableOpacity>
  );
};

export default Reset;
