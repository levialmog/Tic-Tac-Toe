import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import MyContext from "./Context";

import xImage from "./images/x.png";
import oImage from "./images/o.png";

class Square extends Component {
  constructor() {
    super();
    this.state = { image: null, isChanged: false };
  }

  render() {
    const handleClick = (context) => {
      if (!this.state.isChanged) {
        this.setState({ image: context.turn, isChanged: true });
        context.changeTurn();
      }
    };

    return (
      <MyContext.Consumer>
        {(context) => (
          <span className="Square">
            <button
              style={{
                height: 100,
                width: 100,
                backgroundImage: `url(${
                  this.state.image == null
                    ? null
                    : this.state.image
                    ? xImage
                    : oImage
                })`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              onClick={() => handleClick(context)}
            ></button>
          </span>
        )}
      </MyContext.Consumer>
    );
  }
}

export default Square;
