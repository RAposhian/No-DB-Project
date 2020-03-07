import React, { Component } from 'react';
import axios from 'axios'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css' 


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
      } else {
         return toast.warn('Select a unit and Quantity')
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
      let totalCost = this.props.costTotal.reduce((a,c) => (a += c.cost)*c.quantity, 0)
      let listData = this.state.listOfUnits.map((e, i)=> <option key={i} value={e.id}>{e.name}</option>)
      return (
         // this is the left side bar that is where you select your units.
         <section className="select-unit-container">
            
            <h2>Pick Units Here:</h2>
            <select onChange={this.handleChange}>
               <option>Select Unit</option>
               {listData}
            </select>
            <input 
               type="number"  
               value={this.state.userInput} 
               onChange={e => this.setState({userInput: e.target.value})}
            />
            <button 
            onClick= {this.handleAdd}
            >Add</button>
            <h2>Army total Cost: <br/> {totalCost}</h2>
         </section>
      )
   }
}