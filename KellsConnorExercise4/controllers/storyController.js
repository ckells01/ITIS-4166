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

exports.show = (req, res, next) => {
    // res.send('Send story with id ' + req.params.id);
    let id = req.params.id;
    let story = model.findById(id);
    if(story) {
        res.render('./story/show', {story});
    } else {
        let err = new Error('Cannot find a story with id ' + id);
        err.status = 404;
        next(err);
    }
}

exports.edit = (req, res, next) => {
    // res.send('Send the edit form');
    let id = req.params.id;
    let story = model.findById(id);
    if(story) {
        res.render('./story/edit', {story});
    } else {
        let err = new Error('Cannot find a story with id ' + id);
        err.status = 404;
        next(err);
    }
}

exports.update = (req, res, next) => {
    // res.send('Update story with id ' + req.params.id);
    let story = req.body;
    let id = req.params.id.trim();

    if (model.updateById(id, story)) {
        res.redirect('/stories/' + id); 
    } else {
        let err = new Error('Cannot find a story with id ' + id);
        err.status = 404;
        next(err);
    }
}

exports.delete = (req, res, next) => {
    // res.send('Delete story with id ' + req.params.id);
    let id = req.params.id.trim();
    if (model.deleteById(id)) {
        res.redirect('/stories');
    } else {
        let err = new Error('Cannot find a story with id ' + id);
        err.status = 404;
        next(err);
    }
}