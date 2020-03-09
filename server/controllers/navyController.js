navyUnits = [
   {
      id: 1,
      name: 'Galley',
      cost: 100,
      quantity: 0,
      image: 'galley'
   },
   {
      id: 2,
      name: 'Caravel',
      cost: 200,
      quantity: 0,
      image: 'caravel'
   },
   {
      id: 3,
      name: 'Carrack',
      cost: 250,
      quantity: 0,
      image: 'carrack'
   },
   {
      id: 4,
      name: 'Curragh',
      cost: 50,
      quantity: 0,
      image: 'curragh'
   },
   {
      id: 5,
      name: 'Man-O-War',
      cost: 300,
       quantity: 0,
       image: 'man-o-war'
   },
   {
      id: 6,
      name: 'Galleon',
      cost: 250,
      quantity: 0,
      image: 'galleon'
   },
   {
      id: 7,
      name: 'Frigate',
      cost: 300,
      quantity: 0,
      image: 'frigate'
   }
]

module.exports = {
   listOfShips: (req, res) => {
      res.status(200).send(navyUnits)
   }
}