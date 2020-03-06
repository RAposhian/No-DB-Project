import React, { Component } from 'react';
import './App.css';
import './reset.css'
import Header from './Components/Header'
import PickUnits from './Components/PickUnits'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentArmy: []
    }
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <PickUnits />
        
      </div>
    )
  }
}

export default App;
