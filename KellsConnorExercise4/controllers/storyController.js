// Define callback functions used in routes

exports.index = (req, res) => {
    res.send('Send all stories');
}

exports.new = (req, res) => {
    res.send('Send the new form');
}

exports.create = (req, res) => {
    res.send('Created a new story');
}

exports.show = (req, res) => {
    res.send('Send story with id ' + req.params.id);
}

exports.edit = (req, res) => {
    res.send('Send the edit form');
}

exports.update = (req, res) => {
    res.send('Update story with id ' + req.params.id);
}

exports.delete = (req, res) => {
    res.send('Delete story with id ' + req.params.id);
}