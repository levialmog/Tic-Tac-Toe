import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'
import SquareComp from './Square';

class Board extends Component {
  constructor(props){
    super(props)
    this.state = {size : props.size}
  }

  render() {
    let arr = [...Array(this.state.size).keys()];
    let board = arr.map((row, index) => {return <tr key={index}>
      {arr.map((col, index) => {return <td key={index}><SquareComp/></td>})}</tr>})

    return (
      <div className="Board" style={{position: "absolute", top: "50%", left: "50%", transform: 'translate(-50%, -50%)'}}>
        <table>
          <tbody>
            {board}
          </tbody>
        </table>
      </div>  
    );
  }
}

export default Board;
