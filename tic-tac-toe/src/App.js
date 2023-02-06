import './App.css';
import React, {Component} from 'react'
import ControllerComp from './Components/Controller'

class App extends Component {
  constructor(){
    super()
  }

  render() {
    return (
      <div className="App">
          <ControllerComp/>
      </div>
    );
  }
}

export default App;
