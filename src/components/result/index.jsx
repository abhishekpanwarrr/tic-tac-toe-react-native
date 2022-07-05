import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";

const Result = ({ scores, xPlaying }) => {
  const { xScore, oScore } = scores;
  return (
    <View
      style={tw`min-w-full h-[20%] flex bg-blue-800 py-10 flex-row justify-center`}
    >
      <View
        style={tw`w-[49%] h-full flex items-center justify-center  border-b-4 border-green-600 ${
          !xPlaying && "border-b-5 border-transparent"
        } mr-1`}
      >
        <Text style={tw`text-white font-bold text-xl`}>
          Player X - {xScore}
        </Text>
      </View>
      <View
        style={tw`w-[49%] h-full  flex items-center justify-center   border-b-4 border-red-600 ${
          xPlaying && "border-b-5 border-transparent"
        }`}
      >
        <Text style={tw`text-white  font-bold text-xl`}>
          Player O - {oScore}
        </Text>
      </View>
    </View>
  );
};

export default Result;
