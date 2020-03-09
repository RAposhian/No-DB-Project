import React, { Component } from 'react';
import './App.css';
import './reset.css'
import Header from './Components/Header'
import PickUnits from './Components/PickUnits'
import axios from 'axios'
import ArmyDisplay from './Components/ArmyDisplay';
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css' 
import Footer from './Components/Footer'
import PickShips from './Components/PickShips'
import ShipDisplay from './Components/ShipDisplay'



class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentArmy: [],
      rollOut: 'army-box',
      currentNavy: [],
      toggleDisplay: 'Army',
      headerName: 'Make Your Army'
    }
  }

  componentDidMount = () =>{
    axios.get('/api/selected-army')
    .then(res => {
      this.setState({currentArmy: res.data})
    })
    .catch(err => console.log(err))

    axios.get(`/api/selected-navy`)
    .then(res => this.setState({currentNavy: res.data}))
    .catch(err => console.log(err))
  }

  selectUnit = (unit) => {
    let checkUnit = this.state.currentArmy.findIndex(e => e.name === unit.name);  
    if (checkUnit === -1) {
      axios.post('/api/selected-army', {unit})
      .then(res => {
        this.setState({currentArmy: res.data})
      })
      .catch(err => console.log(err))
    } else {
      return toast.error('Duplicate Detected')
    }
  }

  addShip = (ship) => {
    let checkShip = this.state.currentNavy.findIndex(e => e.name === ship.name);
    if (checkShip === -1) {
      axios.post(`/api/selected-navy`, {ship})
      .then(res => this.setState({currentNavy: res.data}))
      .catch(err => console.log(err))
    } else {
      return toast.error('Duplicate Detected')
    }
  }

  deleteUnit = (id) => {
    axios.delete(`/api/selected-army/${id}`)
    .then(res => {
      this.setState({currentArmy: res.data})
    })
    .catch(err => console.log(err))
  }

  deleteShip = (id) => {
    axios.delete(`/api/selected-navy/${id}`)
    .then(res=> this.setState({currentNavy: res.data}))
    .catch(err => console.log(err))
  }

  updateQuantity = (id, newQuantity) => {
    if (id === 8) {
      return toast.error("There is only one Jon in this world!")
    }
    axios.put(`/api/selected-army/${id}`, {quantity: newQuantity})
    .then(res => {
      this.setState({currentArmy: res.data})
    })
    .catch(err => console.log(err))
  }

  updateShip = (id, newName, newQuantity) => {
    axios.put(`/api/selected-navy/${id}`, {name: newName, quantity: newQuantity})
    .then(res => this.setState({currentNavy: res.data}))
    .catch(err => console.log(err))
  }

  rollOut = () => {
    if(this.state.rollOut === 'army-box') {
      return this.setState({rollOut: 'roll-out'})
    }
    if (this.state.rollOut === 'roll-out') {
      this.setState({rollOut: 'army-box'})
    }
  }

  toggleDisplayNavy = () => {
    this.setState({toggleDisplay: 'Navy', headerName: 'Make Your Navy'})

  }

  toggleDisplayArmy = () => {
    this.setState({toggleDisplay: 'Army', headerName: 'Make Your Army'})
  }

  render() {
    
    return (
      <div className='App'>
        
        <Header 
          displayNavy = {this.toggleDisplayNavy}
          displayArmy = {this.toggleDisplayArmy}
          headerName = {this.state.headerName}
        />
        <div className='body-container'>
          {
          (this.state.toggleDisplay === 'Army') ?
            (
            <>
              <PickUnits 
                costTotal = {this.state.currentArmy}
                selectUnit = {this.selectUnit}
                />
              <ArmyDisplay 
              rollOut = {this.state.rollOut}
              updateQuantity = {this.updateQuantity}
              currentArmy = {this.state.currentArmy}
              deleteUnit = {this.deleteUnit}
              />
              <Footer rollOut={this.rollOut}/>
            </>
            )
            :
            <>
              <PickShips 
                shipTotal = {this.state.currentNavy}
                addShip={this.addShip}
              />
              <ShipDisplay 
                deleteShip = {this.deleteShip}
                updateShip = {this.updateShip}
                currentNavy = {this.state.currentNavy}
              />
            </>
          }
          
        </div>
        
        <ToastContainer />
      </div>
    )
  }
}

export default App;
