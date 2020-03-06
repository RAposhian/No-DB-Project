import React, { Component } from 'react';
import './App.css';
import './reset.css'
import Header from './Components/Header'

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
        
      </div>
    )
  }
}

export default App;
