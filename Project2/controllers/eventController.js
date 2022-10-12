const model = require('../models/event');

exports.index = (req, res) => {
    let events = model.find();
    res.render('./event/index', {events});
}

exports.new = (req, res) => {
    res.render('./event/new');
}

exports.create = (req, res) => {
    let event = req.body;
    model.save(event);
    res.redirect('./event/index');
}

exports.show = (req, res, next) => {
    let id = req.params.id;
    let event = model.findById(id);
    console.log(event);
    if(event) {
        res.render('./event/show', {event});
    } else {
        let err = new Error('Cannot find a event with id ' + id);
        err.status = 404;
        next(err);
    }
}

exports.edit = (req, res, next) => {
    let id = req.params.id;
    let event = model.findById(id);
    if(event) {
        res.render('./event/edit', {event});
    } else {
        let err = new Error('Cannot find a event with id ' + id);
        err.status = 404;
        next(err);
    }
}

exports.update = (req, res, next) => {
    let event = req.body;
    let id = req.params.id.trim();

    if (model.updateById(id, event)) {
        res.redirect('/events/' + id); 
    } else {
        let err = new Error('Cannot find a event with id ' + id);
        err.status = 404;
        next(err);
    }
}

exports.delete = (req, res, next) => {
    let id = req.params.id.trim();
    if (model.deleteById(id)) {
        res.redirect('/index');
    } else {
        let err = new Error('Cannot find a event with id ' + id);
        err.status = 404;
        next(err);
    }
}