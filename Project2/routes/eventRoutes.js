const express = require('express');

const controller = require('../controllers/eventController');
const router = express.Router();

// GET /stories: send all events to the user
router.get('/', controller.index);

// GET /stories/new: send html form for creating a new event
router.get('/new', controller.new);

// POST /stories/: create a new event
router.post('/', controller.create);

// GET /stories/:id: send details of event identified by id
router.get('/:id', controller.show);

// GET /stories/:id: send html form for editing an exsisting event
router.get('/:id/edit',controller.edit);

// PUT /stories/:id: update the event identified by id
router.put('/:id', controller.update);

// DELETE /stories/:id: delete the event identified by id
router.delete('/:id', controller.delete);

module.exports = router;