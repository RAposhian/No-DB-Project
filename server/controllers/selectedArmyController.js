selectedArmyList = [];

module.exports = {
   selectedArmy: (req, res) => {
      res.status(200).send(selectedArmyList)
   },
   addToArmy: (req, res) => {
      const {unit} = req.body
      selectedArmyList.push(unit);
      res.status(200).send(selectedArmyList)
   },
   updateArmy: (req, res) => {
      const {id} = req.params;
      const {quantity} = req.body;
      let index = selectedArmyList.findIndex(e => e.id === +id);
      selectedArmyList[index].quantity = quantity;
      res.status(200).send(selectedArmyList)
   },
   deleteUnit: (req, res) => {
      const {id} = req.params;
      let index = selectedArmyList.findIndex(e=> e.id === +id);
      if(index !== -1){
         selectedArmyList.splice(index, 1)
      } else {
         console.log('Unit not found')
      }
      res.status(200).send(selectedArmyList)
   }
}