import React from 'react'
import Ship from './Ship'

const ShipDisplay = (props) => {
   return (
      <div className='navy-container'>
         {
            props.currentNavy.map((e, i) => {
              return ( <Ship 
                  key={i}
                  ship={e}
                  deleteShip={props.deleteShip}
                  updateShip={props.updateShip}               
               />)
            })
         }
      </div>
   )
}

export default ShipDisplay