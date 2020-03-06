import React, { Component } from 'react';
import axios from 'axios'

export default class PickUnits extends Component {
   constructor(props) {
      super(props);

      this.state = {
         listOfUnits: [], // need to set this equal to the list data from a get request of units data list
         userInput: ''
      }
   }
   
   componentDidMount(){
      axios.get('/api/army')
      .then(res => {
         this.setState({listOfUnits: res.data})
      })
      .catch(err => console.log(err))
   }
   
   render(){
   let listData = this.state.listOfUnits.map((e, i)=> <option key={i}>{e.name}</option>)
      return (
         // this is the left side bar that is where you select your units.
         <section className="select-unit-container">
            <select>
               <option>Select Unit</option>
               {listData}
            </select>
            <input 
               type="number"  
               value={this.state.userInput} 
               onChange={e => this.setState({userInput: e.target.value})}
            />
            <button 
            //function passed down from App.js to add to the selected army list
            >Add</button>
            {/* <span>need to add the total cost at the bottom here.</span> */}
         </section>
      )
   }
}