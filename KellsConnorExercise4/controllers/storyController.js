const model = require('../models/story');

exports.index = (req, res) => {
    // res.send('Send all stories');
    let stories = model.find();
    res.render('./story/index', {stories});
}

exports.new = (req, res) => {
    res.render('./story/new');
}

exports.create = (req, res) => {
    // res.send('Created a new story');
    let story = req.body;
    model.save(story);
    res.redirect('/stories');
}

exports.show = (req, res) => {
    // res.send('Send story with id ' + req.params.id);
    let id = req.params.id;
    let story = model.findById(id);
    if(story) {
        res.render('./story/show', {story});
    } else {
        res.status(404).send('Cannot find story with id ' + id);
    }
}

exports.edit = (req, res) => {
    // res.send('Send the edit form');
    let id = req.params.id;
    let story = model.findById(id);
    if(story) {
        res.render('./story/edit', {story});
    } else {
        res.status(404).send('Cannot find story with id ' + id);
    }
}

exports.update = (req, res) => {
    // res.send('Update story with id ' + req.params.id);
    let story = req.body;
    let id = req.params.id.trim();

    if (model.updateById(id, story)) {
        res.redirect('/stories/' + id); 
    } else {
        res.status(404).send('Cannot find story with id ' + id);
    }
}

exports.delete = (req, res) => {
    // res.send('Delete story with id ' + req.params.id);
    let id = req.params.id.trim();
    if (model.deleteById(id)) {
        res.redirect('/stories');
    } else {
        res.status(404).send('Cannot find story with id ' + id);
    }
}