// This contains main modules for NodeJS server

const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');

require('./models/Product');

// mongoose.connect(keys.mongodbURI); // This is for using with mLab MongoDB
// This is for using with MongoDB Atlas
mongoose.connect(keys.mongodbURI, { useNewUrlParser: true });

const app = express();

// require('./services/')

require('./routes/productsRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  // Express will  server up production assets
  // like our main.js file, or main.css file!
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesnt recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
