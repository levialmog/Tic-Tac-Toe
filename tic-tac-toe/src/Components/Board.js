import React, { Component } from "react";
import SquareComp from "./Square";

class BoardComp extends Component {
  constructor(props) {
    super(props);
    this.state = { size: props.size, matrix: [ undefined, undefined, undefined, 
                                               undefined, undefined, undefined,
                                               undefined, undefined, undefined ] };
  }

  updateMatrix = (index) => {
    this.state.matrix[index] = this.props.turn;
    this.checkBoardGame();
  }

  checkBoardGame = () => {
    const optionsToWin = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6] ,[1, 4, 7] ,[2, 5, 8] ,[0, 4, 8], [2, 4, 6]];
    optionsToWin.forEach(row => {
      let [a, b, c] = row
      
      if((this.state.matrix[a] !== undefined && this.state.matrix[b] !== undefined && this.state.matrix[c] !== undefined) &&
         (this.state.matrix[a] === this.state.matrix[b] === this.state.matrix[c])){
            this.props.win()
            return;
        }
    })
  }

  render() {
    let arr = [...Array(this.state.size).keys()];
    let board = arr.map((row) => {
      return (
        <tr key={row}>
          {arr.map((col) => {
            return (
              <td key={col}>
                <SquareComp updateMatrix= {this.updateMatrix} cell={row * this.state.size + col}/>
              </td>
            );
          })}
        </tr>
      );
    });

    return (
      <div
        className="Board"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <table>
          <tbody>{board}</tbody>
        </table>
      </div>
    );
  }
}

export default BoardComp;
