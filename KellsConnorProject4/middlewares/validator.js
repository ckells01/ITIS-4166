const {body} = require('express-validator');
const {validationResult} = require('express-validator');
const { format } = require('morgan');

exports.validateId = (req, res, next)=>{
    let id = req.params.id;
    //an objectId is a 24-bit Hex string
    if(!id.match(/^[0-9a-fA-F]{24}$/)) {
        let err = new Error('Invalid event id');
        err.status = 400;
        return next(err);
    } else {
        return next();
    }
};

exports.validateSignUp = [body('firstName', 'First name cannot be empty').notEmpty().trim().escape(),
body('lastName', 'Last name cannot be empty').notEmpty().trim().escape(),
body('email', 'Email must be a valid email address').isEmail().trim().escape().normalizeEmail(), 
body('password', 'Password must be at leat 8 characters and at most 64 characters').isLength({min: 8, max: 64})];

exports.validateLogIn = [body('email', 'Email must be a valid email address').isEmail().trim().escape().normalizeEmail(), 
body('password', 'Password must be at leat 8 characters and at most 64 characters').isLength({min: 8, max: 64})];

exports.validateResult = (req, res, next)=>{
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
        errors.array().forEach(error => {
            req.flash('error', error.msg);
        });
        return res.redirect('back');
    } else {
        return next();
    }
};

exports.validateEvent = [body('title', 'Title cannot be empty').trim().escape(),
body('content', 'Content must be at leat 10 characters').isLength({min: 10})];

exports.isDate = [body('date', 'Date must be a valid date').isDate()];

exports.isAfter = [body('date', 'Date must be after today\'s date').isAfter()];

exports.matches = [body('startTime', 'StartTime must be a valid time').matches(/^([01]\d|2[0-3]):?([0-5]\d)$/), 
body('endTime', 'EndTime must be a valid time').matches(/^([01]\d|2[0-3]):?([0-5]\d)$/)];

exports.compareTime = (req, res, next)=>{
    //if req.body.endTime is AFTER req.body.startTime
    //console.log("CURR TIME = " + req.body.startTime);

    let startTimeArr = "" + req.body.startTime;
    let endTimeArr = "" + req.body.endTime;

    // console.log("AFTER TIME = "+ req.body.startTime.v).
    //loop thorugh startTime str get first 2 digits and last 2 ignore mid
    let startHrs = "";
    let startMins = "";
    for (let i = 0; i < req.body.startTime.length; i++) {
        if (i < 2) {
            startHrs += startTimeArr[i];
        }
        if (i > 2) {
            startMins += startTimeArr[i];
        }
    }

    let endHrs = "";
    let endMins = "";
    for (let i = 0; i < req.body.endTime.length; i++) {
        if (i < 2) {
            endHrs += endTimeArr[i];
        }
        if (i > 2) {
            endMins += endTimeArr[i];
        }
    }

    //compare 
    if (startHrs == endHrs) {
        if (startMins < endMins) {
            return next();
        } else {
            if (startMins == endMins) {
                req.flash('error', "Start and end times cannot be the same");
                return res.redirect('back');
            }
            else {
               req.flash('error', "Start time cannot be later than end time");
                return res.redirect('back'); 
            }
        }
    } else {
        if (startHrs > endHrs) {
            req.flash('error', "Start time cannot be later than end time");
            return res.redirect('back');
        } else {
            return next();
        }
    }

    //return next() after everything is checked and done
};