const model = require('../views');

exports.index = (req, res) => {
    res.render('.views/index');
}

exports.about = (req, res) => {
    res.render('.views/about');
}

exports.contact = (req, res) => {
    res.redirect('.views/contact');
}