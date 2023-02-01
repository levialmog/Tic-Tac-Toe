import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'
import SquareComp from './Square';

class Board extends Component {
  constructor(){
    super()
  }

  render() {
    return (
      <div className="App">
        <SquareComp/>
        <SquareComp/>
        <SquareComp/>
        <SquareComp/>
        <SquareComp/>
        <SquareComp/>
        <SquareComp/>
        <SquareComp/>
        <SquareComp/>
      </div>
    );
  }
}

export default Board;
