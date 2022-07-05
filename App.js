import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import tw from "twrnc";
import Board from "./src/components/board";
import Reset from "./src/components/reset";
import Result from "./src/components/result";
import { useState } from "react";

export default function App() {
  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const [board, setBoard] = useState(Array(9).fill(null));

  const [xPlaying, setXPlaying] = useState(true);
  const [scores, setScores] = useState({
    xScore: 0,
    oScore: 0,
  });

  const [gameOver, setGameOver] = useState(false);

  // function for start game keyboard
  const handleBoxClick = (boxIdx) => {
    console.log("handle clicked");
    const updatedBoard = board.map((value, idx) => {
      console.log("🚀 ~ file: App.js ~ line 34 ~ updatedBoard ~ value", value);
      if (idx === boxIdx) {
        return xPlaying === true ? "X" : "O";
      } else {
        return value;
      }
    });

    const winner = checkWinner(updatedBoard);
    if (winner) {
      if (winner === "O") {
        let { oScore } = scores;
        oScore += 1;
        setScores({ ...scores, oScore });
      } else {
        let { xScore } = scores;
        xScore += 1;
        setScores({ ...scores, xScore });
      }
    }
    setBoard(updatedBoard);
    setXPlaying((player) => !player);
  };

  // function for checking winner
  const checkWinner = (board) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameOver(true);
        return board[x];
      }
    }
  };
  //function for reseting the game
  const resetBoard = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
  };

  return (
    <SafeAreaView style={tw`bg-black h-full w-full flex items-center`}>
      <StatusBar style="light" />
      <Result scores={scores} xPlaying={xPlaying} />
      <Board board={board} onClick={gameOver ? resetBoard : handleBoxClick} />
      <Reset resetBoard={resetBoard} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
