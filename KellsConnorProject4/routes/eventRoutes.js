const express = require('express');

const controller = require('../controllers/eventController');
const router = express.Router();
const {validateResult, isDate, isAfter, matches, compareTime} = require('../middlewares/validator');

// GET /events: send all events to the user
router.get('/', controller.index);

// GET /events/new: send html form for creating a new event
router.get('/new', controller.new);

// POST /events/: create a new event
router.post('/', isDate, isAfter, matches, compareTime, validateResult, controller.create);

// GET /events/:id: send details of event identified by id
router.get('/:id', controller.show);

// GET /events/:id: send html form for editing an exsisting event
router.get('/:id/edit', controller.edit);

// PUT /events/:id: update the event identified by id
router.put('/:id', isDate, isAfter, matches, compareTime, validateResult, controller.update);

// DELETE /events/:id: delete the event identified by id
router.delete('/:id', controller.delete);

// POST /events/:id/rsvp: ?
router.post('/:id/rsvp');

module.exports = router; 