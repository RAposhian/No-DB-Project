const express = require('express'),
      alc = require('./controllers/armyListController'),
      app = express(),
      port = 8080
      sac = require('./controllers/selectedArmyController'),
      nlc = require('./controllers/navyController'),
      sn = require('./controllers/selectedNavyController');

app.use(express.json())

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

app.listen(port, () => console.log(`Server is running on port: ${port}`));