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



class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentArmy: [],
      rollOut: 'army-box'
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
    let checkUnit = this.state.currentArmy.findIndex(e => e.name === unit.name);  
    if (checkUnit === -1) {
      axios.post('/api/selected-army', {unit})
      .then(res => {
        this.setState({currentArmy: res.data})
      })
      .catch(err => console.log(err))
    } else {
      return toast.error('Duplicate detected')
    }
  }

  deleteUnit = (id) => {
    axios.delete(`/api/selected-army/${id}`)
    .then(res => {
      this.setState({currentArmy: res.data})
    })
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

  rollOut = () => {
    if(this.state.rollOut === 'army-box') {
      return this.setState({rollOut: 'roll-out'})
    }
    if (this.state.rollOut === 'roll-out') {
      this.setState({rollOut: 'army-box'})
    }
  }

  render() {
    // console.log(this.state.currentArmy)
    return (
      <div className='App'>
        
        <Header />
        <div className='body-container'>
          <PickUnits 
            costTotal = {this.state.currentArmy}
            selectUnit = {this.selectUnit}
            />
          <ArmyDisplay 
          rollOut= {this.state.rollOut}
          updateQuantity = {this.updateQuantity}
          currentArmy={this.state.currentArmy}
          deleteUnit={this.deleteUnit}
          />
        </div>
        <Footer rollOut={this.rollOut}/>
        <ToastContainer />
      </div>
    )
  }
}

export default App;
