require('dotenv').config();
const express = require('express'),
      alc = require('./controllers/armyListController'),
      massive = require('massive'),
      app = express(),
      {SERVER_PORT, CONNECTION_STRING} = process.env,
      port = SERVER_PORT,
      sac = require('./controllers/selectedArmyController'),
      nlc = require('./controllers/navyController'),
      sn = require('./controllers/selectedNavyController');

app.use(express.json())

massive({
   connectionString: CONNECTION_STRING,
   ssl: {rejectUnauthorized: false}
})
.then(db => {
   app.set('db', db)
   app.listen(port, () => console.log(`Server is running on port: ${port}`));
   console.log('DB connected')
})



app.get(`/api/army`, alc.unitOptions);
app.get(`/api/selected-army`, sac.selectedArmy);
app.post(`/api/selected-army`, sac.addToArmy);
app.put(`/api/selected-army/:id`, sac.updateArmy);
app.delete(`/api/selected-army/:id`, sac.deleteUnit);
app.get(`/api/navy`, nlc.listOfShips);
app.get(`/api/selected-navy`, sn.selectedNavy);
app.post(`/api/selected-navy`, sn.addToNavy);
app.put(`/api/selected-navy/:id`, sn.editQuantity);
app.delete(`/api/selected-navy/:id`, sn.deleteShip);
