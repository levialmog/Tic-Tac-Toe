import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'
import BoardComp from './Board';

class Controller extends Component {
  constructor(){
    super()
  }

  render() {
    return (
      <div className="App">
        <h2>Tic Tac Toe</h2>
        <BoardComp/>
      </div>
    );
  }
}

export default Controller;
