import React from 'react';
import { GiCastle } from 'react-icons/gi'

const Footer = (props) => {
   return (
      <GiCastle  
         className='roll-out-button'
         onClick={props.rollOut}
         size={70}
         color={'grey'}
      />
   )
}

export default Footer