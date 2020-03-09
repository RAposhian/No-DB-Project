import React, {Component} from 'react'
import axios from 'axios'
import {GiPirateCannon} from 'react-icons/gi'
import {GiTwoCoins} from 'react-icons/gi'
import { toast } from 'react-toastify';

class PickShips extends Component {
   constructor(props){
      super(props);

      this.state = {
         listOfShips: [],
         userInput: '',
         selectedShip: null
      }
   }
   
   componentDidMount() {
      axios.get(`/api/navy`)
      .then(res => this.setState({listOfShips: res.data}))
      .catch(err => console.log(err))
   }


   handleAdd = () => {
      let copyObj = this.state.selectedShip;
      if (copyObj) {
         copyObj.quantity = +this.state.userInput
      } else {
         return toast.error('Select a Ship')
      }
      this.setState({selectedShip: {...copyObj}});
      this.props.addShip(this.state.selectedShip)
      this.setState({selectedShip: null,
      userInput: ''})

   }

   handleChange = (event) => {
      let shipObj = this.state.listOfShips.find(e => e.id === +event.target.value);
      this.setState({selectedShip: shipObj})
   }


   render(){
      console.log(this.props.shipTotal)
      let totalCost = this.props.shipTotal.reduce((a, c) => {
         a += c.cost * c.quantity
         return a;
      }, 0)
      let listData = this.state.listOfShips.map((e, i)=> <option key={i} value={e.id}>{e.name}</option>)
      return (
         <section className='ship-pick-container'>
            <div className='pick-unit-box'>

               <h2>Pick a Ship Here:</h2>
               <select onChange={this.handleChange} className='unit-selector'>
                  <option>Select a Ship</option>
                  {listData}
               </select>
               <input 
                  className='quantity-input'
                  type='number'
                  value={this.state.userInput}
                  onChange={e=> this.setState({userInput: e.target.value})}
               />
               <GiPirateCannon 
                  size={60}
                  className='select-button'
                  onClick={this.handleAdd}
               />
            </div>
            <h2 id='total-output'>Navy total <br/> {totalCost}</h2>
            <GiTwoCoins className='gold-coins' size={50} color={'gold'}/>
         </section>
      )
   }
}


export default PickShips