listOfUnits= [
   {
      id: 1,
      name: 'Spearman',
      cost: 10,
      quantity: 0
   },
   {
      id: 2,
      name: 'Swordman',
      cost: 20,
      quantity: 0
   },
   {
      id: 3,
      name: 'Archer',
      cost: 25,
      quantity: 0
   },
   {
      id: 4,
      name: 'Knight',
      cost: 40,
      quantity: 0
   },
   {
      id: 5,
      name: 'Catapult',
      cost: 100,
       quantity: 0
   },
   {
      id: 6,
      name: 'Crossbow Man',
      cost: 20,
      quantity: 0
   },
   {
      id: 7,
      name: 'Peasant',
      cost: 5,
      quantity: 0
   },
   {
      id: 8,
      name: 'Jon',
      cost: 10000,
      quantity: 0
   },
   {
      id: 9,
      name: 'Trebuchet',
      cost: 150,
      quantity: 0
   },
   {
      id: 10,
      name: 'Scout',
      cost: 15,
      quantity: 0
   }
];

module.exports = {
   unitOptions: (req, res)=> {
      res.status(200).send(listOfUnits)
   }
}