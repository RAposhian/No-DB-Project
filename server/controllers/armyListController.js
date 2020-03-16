// listOfUnits= [
//    {
//       id: 1,
//       name: 'Spearman',
//       cost: 10,
//       quantity: 0,
//       image: 'spearman'
//    },
//    {
//       id: 2,
//       name: 'Swordman',
//       cost: 20,
//       quantity: 0,
//       image: 'swordsman'
//    },
//    {
//       id: 3,
//       name: 'Archer',
//       cost: 25,
//       quantity: 0,
//       image: 'archer'
//    },
//    {
//       id: 4,
//       name: 'Knight',
//       cost: 40,
//       quantity: 0,
//       image: 'knight'
//    },
//    {
//       id: 5,
//       name: 'Catapult',
//       cost: 100,
//        quantity: 0,
//        image: 'catapult'
//    },
//    {
//       id: 6,
//       name: 'Crossbow Man',
//       cost: 20,
//       quantity: 0,
//       image: 'crossbow'
//    },
//    {
//       id: 7,
//       name: 'Peasant',
//       cost: 5,
//       quantity: 0,
//       image: 'peasant'
//    },
//    {
//       id: 8,
//       name: 'Jon',
//       cost: 10000,
//       quantity: 0,
//       image: 'jon'
//    },
//    {
//       id: 9,
//       name: 'Trebuchet',
//       cost: 150,
//       quantity: 0,
//       image: 'trebuchet'
//    },
//    {
//       id: 10,
//       name: 'Scout',
//       cost: 15,
//       quantity: 0,
//       image: 'scout'
//    }
// ];

module.exports = {
   unitOptions: (req, res)=> {
      const db = req.app.get('db');

      db.army_options()
      .then(units => res.status(200).send(units))
      .catch( err => res.status(500).send(err))
   }
};