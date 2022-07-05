import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import Box from "../box";

const Board = ({ board, onClick }) => {
  return (
    <View style={tw`flex flex-wrap flex-row px-12 pt-12`}>
      {board.map((value, idx) => (
        <TouchableOpacity
          onPress={() => value === null && onClick(idx)}
          key={idx}
        >
          <Box value={value} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Board;
