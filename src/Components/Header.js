import React from 'react';
import { GiSharpAxe } from 'react-icons/gi';
import { GiCatapult } from 'react-icons/gi';



const Header = () => {
   return (
      <header className="header-container">
         <GiSharpAxe size={120} color={'rgb(146, 142, 142)'}/> 
         <h3>Make  Your  Army</h3>
         <GiCatapult size={120} color={'rgb(146, 142, 142)'}/>
         
      </header>
   )
}

export default Header;