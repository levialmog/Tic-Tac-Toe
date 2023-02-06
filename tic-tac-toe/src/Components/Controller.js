import React, { Component } from "react";
import BoardComp from "./Board";
import MyContext from "../Context";
import WinComp from "./Win";

class Controller extends Component {
  constructor() {
    super();
    this.state = { turn: true, win: false };
  }

  changeTurn = () => {
    this.setState({ turn: !this.state.turn });
  };

  win = () => {
    this.setState({ win: true });
  };

  render() {
    let screen = !this.state.win ? (
      <div>
        <h1>Tic Tac Toe</h1>
        <h2>Welcome!</h2>
        <BoardComp size={3} turn={this.state.turn} win={this.win} /> <br />
        <h1 style={{ position: "fixed", bottom: 20, right: 550 }}>
          Player turn: {this.state.turn ? "X" : "O"}
        </h1>
      </div>
    ) : (
      <WinComp turn={this.state.turn} />
    );

    return (
      <MyContext.Provider
        value={{
          turn: this.state.turn,
          changeTurn: this.changeTurn,
          updateMatrix: this.updateMatrix,
        }}
      >
        <div className="Controller">
          {screen}
        </div>
      </MyContext.Provider>
    );
  }
}

export default Controller;
