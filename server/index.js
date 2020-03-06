const express = require('express'),
      ac = require('./controllers/armyListController'),
      app = express(),
      port = 8080;

app.use(express.json())

app.get(`/api/army`, ac.unitOptions)

app.listen(port, () => console.log(`Server is running on port: ${port}`));