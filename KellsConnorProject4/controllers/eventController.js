const model = require('../models/event');
const rvspModel = require('../models/rsvp');
const user = require('../models/user');

exports.index = (req, res, next)=>{
    const data = {
        // Using objects bypasses scope problems
        distinctCats: {}
    };

    model.find().distinct('category', (error, arr) => {
        data.distinctCats = arr;
    });

    model.find()
    .then(events => {res.render('./event/index', {events, arr: data.distinctCats, firstName: req.session.firstName})})
    .catch(err => next(err));
};

exports.new = (req, res) => {
    res.render('./event/new', {firstName: req.session.firstName});
}

exports.create = (req, res, next)=>{
    let event = new model(req.body);
    event.author = req.session.user;
    event.save()
    .then(event => res.redirect('/events'))
    .catch(err => {
        if(err.name === "ValidationError") {
            err.status = 400;
        }
        next(err);
    });
};

exports.show = (req, res, next)=>{
    let id = req.params.id;
    console.log("show func: " + req.session.firstName);
    model.findById(id).populate('author', 'firstName lastName')
    .then(event => {
        if(event) {
            return res.render('./event/show', {event, firstName: req.session.firstName});
        } else {
            let err = new Error('Cannot find a event with id ' + id);
            err.status = 404;
            next(err);
        }
    })
    .catch(err => next(err));
};

exports.edit = (req, res, next)=>{
    let id = req.params.id;

    model.findById(id)
    .then(event => {
        if(event) {
            return res.render('./event/edit', {event, firstName: req.session.firstName});
        } else {
            let err = new Error('Cannot find a event with id ' + id);
            err.status = 404;
            next(err);
        }
    })
    .catch(err => next(err));
};


exports.update = (req, res, next)=>{
    let event = req.body;
    let id = req.params.id;

    model.findByIdAndUpdate(id, event, {useFindAndModify: false, runValidators: true})
    .then(event => {
        if(event) {
            res.redirect('/events/'+id);
        } else {
            let err = new Error('Cannot find a event with id ' + id);
            err.status = 404;
            next(err);
        }
    })
    .catch(err => {
        if(err.name === "ValidationError") {
            err.status = 400;
        }
        next(err);
    });
};

exports.delete = (req, res, next)=>{
    let id = req.params.id;

    model.findByIdAndDelete(id, {useFindAndModify: false})
    .then(event => {
        if(event) {
            res.redirect('/events');
        } else {
            let err = new Error('Cannot find a event with id ' + id);
            err.status = 404;
            return next(err);
        }
    })
    .catch(err => next(err));
};

exports.rsvp = (req, res, next) => {
    let rsvpEvent = new rsvpModel(req.body);
    rvspModel.findOneAndUpdate();
};