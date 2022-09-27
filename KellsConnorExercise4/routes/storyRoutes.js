const express = require('express');

const router = express.Router();

// GET /stories: send all stories to the user
router.get('/', (req, res) => {
    res.send('Send all stories');
});

// GET /stories/new: send html form for creating a new story
router.get('/new', (req, res) => {
    res.send('Send the new form');
});

// POST /stories/: create a new story
router.post('/', (req, res) => {
    res.send('Created a new story');
});

// GET /stories/:id: send details of story identified by id
router.get('/:id', (req, res) => {
    res.send('Send story with id ' + req.params.id);
});

// GET /stories/:id: send html form for editing an exsisting story
router.get('/:id/edit', (req, res) => {
    res.send('Send the edit form');
});

// PUT /stories/:id: update the story identified by id
router.put('/:id', (req, res) => {
    res.send('Update story with id ' + req.params.id);
});

// DELETE /stories/:id: delete the story identified by id
router.delete('/:id', (req, res) => {
    res.send('Delete story with id ' + req.params.id);
});

module.exports = router;