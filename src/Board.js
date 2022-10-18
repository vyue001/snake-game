import React, { useState } from "react";
import "./Board.css";

const BOARD_SIZE = 10;

const Board = () => {
  const [board, setBoard] = useState(
    new Array(BOARD_SIZE).fill(0).map((row) => new Array(BOARD_SIZE).fill(0))
  ); // default board state is an array of 10 length 

  return (
    <div className="board">
    // map board with 10x10 dimesions
      {board.map((row, rowIdx) => (
        <div key={rowIdx} className="row">
          {row.map((cell, cellIdx) => (
            // the color that will be shown depending on snake or food cell
            <div key={cellIdx} className={`cell ${true ? 'snake-cell' : ''}`}></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
