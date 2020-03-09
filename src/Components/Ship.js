import React, { Component } from 'react';
import {GiSinkingShip} from 'react-icons/gi'

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

   render(){
      return (
         <div>
            
         </div>
      )
   }
}

export default Ship