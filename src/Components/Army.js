import React, { Component } from 'react'
import archer from '../assets/archer.jpg'
import catapult from '../assets/catapult.jpg'
import crossbow from '../assets/crossbow.jpg'
import jon from '../assets/IMG_E0947[1] (2).JPG'
import knight from '../assets/knight.jpg'
import scout from '../assets/scout.jpg'
import spearman from '../assets/spear-man.jpg'
import swordsman from '../assets/swordsman.jpg'
import trebuchet from '../assets/trebuchet.jpg'
import peasant from '../assets/Troop_Peasant.png'


 export default class Army extends Component {
   constructor(props){
      super(props);

      this.state = {
         editToggle: false,
         userInput: '',
         rollOut: 'army-box'
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
      let image;
      if (unitData.image === 'spearman') {
         image = spearman
      }
      if (unitData.image === 'swordsman') {
         image = swordsman
      }
      if (unitData.image === 'archer') {
         image = archer
      }
      if (unitData.image === 'knight') {
         image = knight
      }
      if (unitData.image === 'catapult') {
         image = catapult
      }
      if (unitData.image === 'crossbow') {
         image = crossbow
      }
      if (unitData.image === 'peasant') {
         image = peasant
      }
      if (unitData.image === 'jon') {
         image = jon
      }
      if (unitData.image === 'trebuchet') {
         image = trebuchet
      }
      if (unitData.image === 'scout') {
         image = scout
      }
     
     
      return (
         <div className={this.props.rollOut}>
            <h2>{unitData.name}</h2>
            <img  className='unit-img' src={image} alt={unitData.name}/>
            {this.state.editToggle
            ?
            <div>
               <input 
                  type='number' 
                  defaultValue={unitData.quantity}
                  onChange={e => this.setState({userInput: e.target.value})}
                  />
               <button onClick={()=> this.handleUpdate(unitData.id)}>Update</button>
            </div>
            :
            <span>Quantity: {unitData.quantity}</span>
            }
            <div className ='button-bar'>
               <button onClick={this.toggleEdit}>Edit</button>
               <button onClick={()=>this.props.deleteUnit(unitData.id)}>Delete</button>
            </div>
            
         </div>
      )
   }
}