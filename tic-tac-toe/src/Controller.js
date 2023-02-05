import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'
import BoardComp from './Board';
import MyContext from './Context'

class Controller extends Component {
  constructor(){
    super()
    this.state={turn: true}
  }

  changeTurn = () => {
      this.setState({turn: !this.state.turn})
  }

  render() {
    return (
      <MyContext.Provider value={{turn:this.state.turn, changeTurn: this.changeTurn}}>
        <div className="Controller" >
          <h1>Tic Tac Toe</h1>
          <h2>Welcome!</h2>
          <BoardComp size={3}/> <br/>
          <h1 style={{position: 'fixed', bottom: 20, right: 550}}>
            Player turn: {this.state.turn ? "X" : "O"}
          </h1>
        </div>
      </MyContext.Provider>
    );
  }
}

export default Controller;
