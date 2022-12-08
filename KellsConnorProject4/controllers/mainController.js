exports.index = (req, res) => {
    res.render('./index', {firstName: req.session.firstName});
}

exports.about = (req, res) => {
    res.render('./about', {firstName: req.session.firstName});
}

exports.contact = (req, res) => {
    res.render('contact', {firstName: req.session.firstName});
}