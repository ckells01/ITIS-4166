const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rsvpSchema = new Schema({
    status:    {type: String},
    eventName: {type: String},
    category:  {type: String},
    userName:  {type: String}
});

module.exports = mongoose.model('Rsvp', rsvpSchema);