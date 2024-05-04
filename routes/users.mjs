import express from "express";
const router = express.Router();

// Load User model
import User from '../models/User.mjs';

// @route   GET api/Users/test
// @desc    Tests Users route
// @access  Public
router.get('/test', (req, res) => res.send('User route testing!'));

// @route   GET api/Users
// @desc    Get all Users
// @access  Public
router.get('/', (req, res) => {
  User.find()
    .then(Users => res.json(Users))
    .catch(err => res.status(404).json({ noUsersfound: 'No Users found' }));
});

// @route   GET api/Users/:id
// @desc    Get single User by id
// @access  Public
router.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(User => res.json(User))
    .catch(err => res.status(404).json({ noUserfound: 'No User found' }));
});

// @route   POST api/User
// @desc    Add/save User
// @access  Public
router.post('/', (req, res) => {
  User.create(req.body)
    .then(User => res.json({ msg: 'User added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this User' }));
});

// @route   PUT api/Users/:id
// @desc    Update User by id
// @access  Public
router.put('/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body)
    .then(User => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route   DELETE api/Users/:id
// @desc    Delete User by id
// @access  Public
router.delete('/:id', (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(User => res.json({ mgs: 'User entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a User' }));
});

export default router;