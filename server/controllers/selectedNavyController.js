selectedNavy = [];

module.exports = {
   selectedNavy: (req, res) => {
      res.status(200).send(selectedNavy)
   },
   addToNavy: (req, res) => {
      const {ship} = req.body;
      selectedNavy.push(ship);
      res.status(200).send(selectedNavy);
   },
   editQuantity: (req, res) => {
      const {id} = req.params;
      const {quantity, name} = req.body
      let index = selectedNavy.findIndex(e => e.id === +id);
      selectedNavy[index].name = name;
      selectedNavy[index].quantity = quantity;
      res.status(200).send(selectedNavy)
   },
   deleteShip: (req, res) => {
      const {id} = req.params;
      const index = selectedNavy.findIndex(e => e.id === +id);
      if(index !== -1) {
         selectedNavy.splice(index, 1)
      } else {
         return console.log('Ship not found')
      }
      res.status(200).send(selectedNavy);
   }
}