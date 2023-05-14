const express = require('express');
const router = express.Router();
const { createWorkout, getWorkouts, getWorkout, deleteWorkout, updateWorkout } = require('../controllers/WorkoutController');

//Get All The workout
router.get('/', getWorkouts);

//Get single workout
router.get('/:id', getWorkout);

//Post a new workout
router.post('/', createWorkout);

//Delete a workout
router.delete('/:id', deleteWorkout);

//Update a workout
router.patch('/:id', updateWorkout);

module.exports = router;
