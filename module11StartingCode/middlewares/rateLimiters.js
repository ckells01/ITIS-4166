const rateLimit = require('express-rate-limit');

exports.logInLimiter = rateLimit ({
    windowMs: 60 * 1000,
    max: 5,
    // message: "Too many login requests. Try again later."
    handler: (req, res, next) => {
        let err = new Error('Unauthorized to access the resource');
        err.status = 401;
        return next(err);
    }
});