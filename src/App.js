import React, { Component } from 'react';
import './App.css';
import './reset.css'
import Header from './Components/Header'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      
    }
  }

  render() {
    return (
      <div className='App'>
        <Header />
        This is the App component!
      </div>
    )
  }
}

export default App;
