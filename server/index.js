const express = require('express'),
      ac = require('./controllers/armyController'),
      app = express(),
      port = 8080;

app.use(express.json())



app.listen(port, () => console.log(`Server is running on port: ${port}`));