const express = require('express');
const router = express.Router();

//Get All The workout
router.get('/', (req, res) => {
  res.json({ message: 'GET ALL THE WORKOUT' });
});

//Get single workout
router.get('/:id', (req, res) => {
  res.json({ message: 'GET SINGLE WORKOUT' });
});

//Post a new workout
router.post('/', (req, res) => {
  res.json({ message: 'POST A NEW WORKOUT' });
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
