import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'
import MyContext from './Context'

class Square extends Component {
  constructor(){
    super()
  }

  render() {
    return (
      <MyContext.Consumer>
        {
          context =>(
            <span className="Square">
            <button style={{height:100, width:100}}></button>
            </span>
          )
        }
      </MyContext.Consumer>
    );
  }
}

export default Square;
