import React, { Component } from 'react';
import './App.css';
import './reset.css'
import Header from './Components/Header'
import PickUnits from './Components/PickUnits'
import axios from 'axios'
import ArmyDisplay from './Components/ArmyDisplay';
import {ToastContainer} from 'react-toastify'



class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentArmy: []
    }
  }

  componentDidMount = () =>{
    axios.get('/api/selected-army')
    .then(res => {
      this.setState({currentArmy: res.data})
    })
    .catch(err => console.log(err))
  }

  selectUnit = (unit) => {
      axios.post('/api/selected-army', {unit})
      .then(res => {
        this.setState({currentArmy: res.data})
      })
      .catch(err => console.log(err))
    
  }

  deleteUnit = (id) => {
    axios.delete(`/api/selected-army/${id}`)
    .then(res => {
      this.setState({currentArmy: res.data})
    })
    .catch(err => console.log(err))
  }

  updateQuantity = (id, newQuantity) => {
    axios.put(`/api/selected-army/${id}`, {quantity: newQuantity})
    .then(res => {
      this.setState({currentArmy: res.data})
    })
    .catch(err => console.log(err))
  }

  render() {
    console.log(this.state.currentArmy)
    return (
      <div className='App'>
        
        <Header />
        <PickUnits 
          costTotal = {this.state.currentArmy}
          selectUnit = {this.selectUnit}
          />
        <ArmyDisplay 
        updateQuantity = {this.updateQuantity}
        currentArmy={this.state.currentArmy}
        deleteUnit={this.deleteUnit}
        />
        <ToastContainer />
      </div>
    )
  }
}

export default App;
