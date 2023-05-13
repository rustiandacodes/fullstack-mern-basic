const express = require('express');
const router = express.Router();
const Workout = require('../models/WorkoutModel');

//Get All The workout
router.get('/', (req, res) => {
  res.json({ message: 'GET ALL THE WORKOUT' });
});

//Get single workout
router.get('/:id', (req, res) => {
  res.json({ message: 'GET SINGLE WORKOUT' });
});

//Post a new workout
router.post('/', async (req, res) => {
  const { title, reps, load } = req.body;
  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//Delete a workout
router.delete('/:id', (req, res) => {
  res.json({ message: 'DELETE A WORKOUT' });
});

//Update a workout
router.patch('/:id', (req, res) => {
  res.json({ message: 'Update A WORKOUT' });
});

module.exports = router;
