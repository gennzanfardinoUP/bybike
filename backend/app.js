

const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const Location = require('./models/location');

const locationsRoutes = require('./routes/locations');

const Review = require('./models/review');

const reviewsRoutes = require('./routes/reviews');

const userRoutes  = require('./routes/user');

mongoose.connect('mongodb+srv://root:root@team3d-pscfn.mongodb.net/test?retryWrites=true')
  .then(() => {
    console.log('Successfully connected to team3d MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());

app.use('/api/locations', locationsRoutes);
app.use('/api/reviews', reviewsRoutes);

app.use('/api/auth',  userRoutes);




module.exports = app;
