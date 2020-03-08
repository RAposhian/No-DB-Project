import React, { Component } from 'react'
import archer from '../assets/archer.png'
import catapult from '../assets/catapult.png'
import crossbow from '../assets/crossbow.png'
import jon from '../assets/jon.png'
import knight from '../assets/Knight.png'
import scout from '../assets/scout.png'
import spearman from '../assets/spear.png'
import swordsman from '../assets/swordman.png'
import trebuchet from '../assets/trebuchet.png'
import peasant from '../assets/Troop_Peasant.png'
import {FaUserPlus} from 'react-icons/fa'
import {GiSkullCrossedBones} from 'react-icons/gi'
import {GiRallyTheTroops} from 'react-icons/gi'


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
               <GiRallyTheTroops  size={40} onClick={()=> this.handleUpdate(unitData.id)}/>
            </div>
            :
            <span>Quantity: {unitData.quantity}</span>
            }
            <div className ='button-bar'>
               <FaUserPlus  size={40} onClick={this.toggleEdit}/>
               <GiSkullCrossedBones size={40} onClick={()=>this.props.deleteUnit(unitData.id)}/>
            </div>
            
         </div>
      )
   }
}