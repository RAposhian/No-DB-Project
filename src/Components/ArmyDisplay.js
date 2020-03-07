import React from 'react';
import Army from './Army'

const ArmyDisplay = (props) => {
   return (
      <div className='army-container'>
         {props.currentArmy.map((e, i) => {
          return (
          <Army 
            key={i} 
            unitData={e}
            deleteUnit={props.deleteUnit}
            updateQuantity = {props.updateQuantity}
          />)
         }) 
      }
      </div>
   )
}


export default ArmyDisplay;