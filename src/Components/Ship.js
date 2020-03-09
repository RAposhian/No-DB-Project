import React, { Component } from 'react';
import {GiSinkingShip} from 'react-icons/gi'
import {GiSailboat} from 'react-icons/gi'
import {GiPirateFlag} from 'react-icons/gi'
import curragh from '../assets/Curragh_(Civ3).png' 
import galley from '../assets/galley.png' 
import caravel from '../assets/caravel.png' 
import manowar from '../assets/manowar.png' 
import frigate from '../assets/frigate.png' 
import galleon from '../assets/galleon.png' 
import carrack from '../assets/carrack.png' 


class Ship extends Component {
   constructor(props){
      super(props);

      this.state = {
         editToggle: false,
         nameInput: '',
         quantityInput: ''
      }
   }

   editToggle = () => {
      this.setState({editToggle: !this.state.editToggle})
   }

   handleEdit = (id) => {
      this.props.updateShip(id, this.state.nameInput, this.state.quantityInput)
      this.setState({editToggle: false})
   }

   render(){
      const {ship} = this.props
      let image;
      if (ship.image === 'galley') {
         image = galley
      }
      if (ship.image === 'caravel') {
         image = caravel
      }
      if (ship.image === 'carrack') {
         image = carrack
      }
      if (ship.image === 'curragh') {
         image = curragh
      }
      if (ship.image === 'man-o-war') {
         image = manowar
      }
      if (ship.image === 'galleon') {
         image = galleon
      }
      if (ship.image === 'frigate') {
         image = frigate
      }
      return (
         <div className='navy-box'>
            <img src={image} alt={ship.name} className='unit-image'/>
            {this.state.editToggle 
            ?
               <div>
                  <input defaultValue={ship.name} onChange={e => this.setState({nameInput: e.target.value})}></input>
                  <br/>
                  <input 
                     type='number' 
                     defaultValue={this.state.quantityInput}
                     onChange = {e => this.setState({quantityInput: e.target.value})}
                  ></input>
                  <GiPirateFlag size={40} onClick={() => this.handleEdit(ship.id)}/>
               </div>
            :
               <>
                  <h2>{ship.name}</h2>
                  <span>Quantity: {ship.quantity}</span>
               </>
            }
            <div className='button-bar'>
               <GiSailboat size={40} onClick={this.editToggle}/>
               <GiSinkingShip size={40} onClick={()=> this.props.deleteShip(ship.id)}/>
            </div>
         </div>
      )
   }
}

export default Ship