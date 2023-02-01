import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'
import ControllerComp from './Controller'

class App extends Component {
  constructor(){
    super()
  }

  render() {
    return (
      <div className="App" style={{backgroundColor:"coral"}}>
          <ControllerComp/>
      </div>
    );
  }
}

export default App;
