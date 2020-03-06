import React, { Component } from 'react'

 export default class Army extends Component {
   constructor(props){
      super(props);

      this.state = {
         editToggle: false,
         userInput: ''
      }
   }

   render() {
     const {unitData} = this.props
      return (
         <div className='army-box'>
            <h2>{unitData.name}</h2>
            <img src={unitData.image} alt={unitData.name}/>
            {this.state.editToggle
            ?
            <input 
               type='number' 
               value={unitData.quantity}
               // onChange={}
            />
            :
            <span>{unitData.quantity}</span>
            }
            <button>Update</button>
            
         </div>
      )
   }
}