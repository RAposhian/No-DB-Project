import React from 'react';
import { GiSharpAxe } from 'react-icons/gi';
import { GiShipWheel } from 'react-icons/gi';

const Header = (props) => {
     return (
         <header className="header-container">
            <GiSharpAxe size={120} color={'black'} onClick={props.displayArmy}/> 
            <h3>Make  Your  Army</h3>
            <GiShipWheel size={120} color={'black'} onClick={props.displayNavy}/>
         </header>
      )
 
}

export default Header;