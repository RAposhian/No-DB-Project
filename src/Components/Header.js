import React from 'react';
import { GiSharpAxe } from 'react-icons/gi';
import { GiCatapult } from 'react-icons/gi';

const Header = () => {
   return (
      <header className="header-container">
         <GiSharpAxe size={120}/> 
         <h3>Make Your Army</h3>
         <GiCatapult size={120}/>
      </header>
   )
}

export default Header;