import React, { Component } from 'react'

 export default class Army extends Component {
   constructor(props){
      super(props);

      this.state = {
         editToggle: false,
         userInput: ''
      }
   }

   handleUpdate = (id) => { 
      this.props.updateQuantity(id, this.state.userInput)
      this.setState({editToggle: false})
   }


   toggleEdit = () => {
      this.setState({editToggle: !this.state.editToggle})
   }

   render() {
     const {unitData} = this.props
      return (
         <div className='army-box'>
            <h2>{unitData.name}</h2>
            <img src={unitData.image} alt={unitData.name}/>
            {this.state.editToggle
            ?
            <div>
               <input 
                  type='number' 
                  onChange={e => this.setState({userInput: e.target.value})}
                  />
               <button onClick={()=> this.handleUpdate(unitData.id)}>Update</button>
            </div>
            :
            <span>{unitData.quantity}</span>
            }
            <div className ='button-bar'>
               <button onClick={this.toggleEdit}>Edit</button>
               <button onClick={()=>this.props.deleteUnit(unitData.id)}>Delete</button>
            </div>
            
         </div>
      )
   }
}