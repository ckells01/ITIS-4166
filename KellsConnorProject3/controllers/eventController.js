const model = require('../models/event');

exports.index = (req, res, next)=>{
    const data = {
        // Using objects bypasses scope problems
        distinctCats: {}
    };

    model.find().distinct('category', (error, arr) => {
        data.distinctCats = arr;
    });

    model.find()
    .then(events => {res.render('./event/index', {events, arr: data.distinctCats})})
    .catch(err => next(err));
};

exports.new = (req, res) => {
    res.render('./event/new');
}

exports.create = (req, res, next)=>{
    let event = new model(req.body);
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
    // An objectId is a 24-bit Hex string
    if(!id.match(/^[0-9a-fA-F]{24}$/)) {
        let err = new Error('Invalid event id');
        err.status = 404;
        return next(err);
    }

    model.findById(id)
    .then(event => {
        if(event) {
            return res.render('./event/show', {event});
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

    if(!id.match(/^[0-9a-fA-F]{24}$/)) {
        let err = new Error('Invalid event id');
        err.status = 404;
        return next(err);
    }

    model.findById(id)
    .then(event => {
        if(event) {
            return res.render('./event/edit', {event});
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

    if(!id.match(/^[0-9a-fA-F]{24}$/)) {
        let err = new Error('Invalid event id');
        err.status = 404;
        return next(err);
    }

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

    if(!id.match(/^[0-9a-fA-F]{24}$/)) {
        let err = new Error('Invalid event id');
        err.status = 404;
        return next(err);
    }

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