import React, {Component} from 'react'
import axios from 'axios'
import {GiPirateCannon} from 'react-icons/gi'
import {GiTwoCoins} from 'react-icons/gi'

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


   


   render(){
      let totalCost = this.props.costTotal.reduce((a, c) => {
         a += c.cost * c.quantity
         return a;
      }, 0)
      let listData = this.state.listOfShips.map((e, i)=> <option key={i} value={e.id}>{e.name}</option>)
      console.log(listData)
      return (
         <section className='ship-pick-container'>
            <div>

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