require('dotenv').config();
const express = require('express');
const workoutRoutes = require('./routes/workout');
// expressapp
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use('/api/workouts', workoutRoutes);

//listen for request
app.listen(process.env.PORT, () => {
  console.log('listen on port', process.env.PORT);
});
