const express = require('express'),
      alc = require('./controllers/armyListController'),
      app = express(),
      port = 8080
      sac = require('./controllers/selectedArmyController');

app.use(express.json())

app.get(`/api/army`, alc.unitOptions);
app.get(`/api/selected-army`, sac.selectedArmy)
app.post(`/api/selected-army`, sac.addToArmy)
app.put(`/api/selected-army/:id`, sac.updateArmy)
app.delete(`/api/selected-army/:id`, sac.deleteUnit)

app.listen(port, () => console.log(`Server is running on port: ${port}`));