import React, { Component } from "react";
import xImage from "../images/x.png";
import oImage from "../images/o.png";
import App from "../App";

class WinComp extends Component {
  constructor() {
    super();
    this.state = { changeScreen: false };
  }

  handleClick = () => {
    this.setState({ changeScreen: true });
  };

  render() {
    let screen = !this.state.changeScreen ? (
      <div className="Win">
        <h1>Tic Tac Toe</h1>
        <h2>The Winner Is {this.props.turn ? "X" : "O"}</h2>
        <div
          style={{
            height: 200,
            width: 200,
            backgroundImage: `url(${this.props.turn ? xImage : oImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        ></div>
        <button
          style={{
            height: 40,
            width: 100,
            position: "absolute",
            top: "80%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          onClick={()=>this.handleClick()}>
          Play Again
        </button>
      </div>
    ) : (
      <App />
    );

    return screen;
  }
}

export default WinComp;
