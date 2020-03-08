import React, {Component} from 'react'
import axios from 'axios'

class PickShips extends Component {
   constructor(props){
      super(props);

      this.state = {
         listOfShips: [],
         userInput: '',
         selectedShip: null
      }
   }
   
   componentDidMount() {
      axios.get(`/api/navy`)
      .then(res => this.setState({listOfShips: res.data}))
      .catch(err => console.log(err))
   }

   render(){
      return (
         <div>

         </div>
      )
   }
}


export default PickShips