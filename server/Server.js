require('dotenv').config();
const workoutRoutes = require('./routes/workout');
const express = require('express');
const mongoose = require('mongoose');

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use('/api/workouts', workoutRoutes);

// mongoose connect
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen for request
    app.listen(process.env.PORT, () => {
      console.log('listen on port', process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
