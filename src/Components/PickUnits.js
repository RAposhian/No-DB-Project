import React, { Component } from 'react';
import axios from 'axios'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css' 
import { GiCrossedSwords } from 'react-icons/gi';
import { GiTwoCoins } from 'react-icons/gi';



export default class PickUnits extends Component {
   constructor(props) {
      super(props);

      this.state = {
         listOfUnits: [], 
         userInput: '',
         selectedUnit: null
      }
   }
   

   componentDidMount(){
      axios.get('/api/army')
      .then(res => {
         this.setState({listOfUnits: res.data})
      })
      .catch(err => console.log(err))
   }

   handleAdd = () => {
      let copyObj = this.state.selectedUnit;
      if(copyObj){
         copyObj.quantity = +this.state.userInput
         if  (copyObj.name === 'Jon'){
            copyObj.quantity = 1;
            toast.warn('There can only be one Jon!')
         }
      } else {
         return toast.error('Select a Unit Type and Quantity')
      }
      this.setState({selectUnit: {...copyObj}});
      this.props.selectUnit(this.state.selectedUnit) 
      this.setState({selectUnit: null,
      userInput: ''
      })
   }

   handleChange = (event) => {
      let unitObj = this.state.listOfUnits.find(e => e.id === +event.target.value);
      this.setState({selectedUnit: unitObj})
   }
   
   render(){
      let totalCost = this.props.costTotal.reduce((a, c) => {
         a += c.cost * c.quantity
         return a;
      }, 0)
      let listData = this.state.listOfUnits.map((e, i)=> <option key={i} value={e.id}>{e.name}</option>)
      return (
         // this is the bar that is where you select your units.
         <section className="select-unit-container">
            <div className='pick-unit-box'>
               <h2>Pick Units Here:</h2>
              
               <select onChange={this.handleChange} className='unit-selector'>
                  <option>Select a Unit</option>
                  {listData}
               </select>
               <input 
                  className='quantity-input'
                  type="number"  
                  value={this.state.userInput} 
                  onChange={e => this.setState({userInput: e.target.value})}
                  />
               <GiCrossedSwords 
               size={60}
               className ='select-button'
               onClick= {this.handleAdd}
               />
            </div>
            <h2 id='total-output'>Army total <br/> {totalCost}</h2>
            <GiTwoCoins className='gold-coins' size={50} color={'gold'}/>
         </section>
      )
   }
}