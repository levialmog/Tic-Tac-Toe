import React, { Component } from "react";
import MyContext from "../Context";
import xImage from "../images/x.png";
import oImage from "../images/o.png";

class SquareComp extends Component {
  constructor() {
    super();
    this.state = { image: null, isChanged: false };
  }

  render() {
    const handleClick = async (context) => {
      if (!this.state.isChanged) {
        this.setState({ image: context.turn, isChanged: true });
        await this.props.updateArray(this.props.cell);
        await context.changeTurn();
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

export default SquareComp;
