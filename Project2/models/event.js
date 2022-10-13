const { dateTime, DateTime } = require("luxon");
const {v4: uuidv4} = require('uuid');

const events = [
{
    id: '1',
    title: 'Title',
    host: 'Host',
    category: 'Cat',
    location: 'Location',
    date: 'Date',
    startTime: 'Start',
    endTime: 'End',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia, nulla quis volutpat pellentesque.',
},
{
    id: '2',
    title: 'Title',
    host: 'Host',
    category: 'Cat',
    location: 'Location',
    date: 'Date',
    startTime: 'Start',
    endTime: 'End',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia, nulla quis volutpat pellentesque.',
}
];

exports.find = () => events;

exports.findById = function(id) {
    return events.find(event => event.id === id);
}

exports.save = function(event) {
    event.id = uuidv4();
    events.push(event);
}

exports.updateById = function(id, newevent) {
    let event = events.find(event => event.id === id);
    if(event) {
        event.title = newevent.title;
        event.host = newevent.host;
        event.category = newevent.category;
        event.location = newevent.location;
        event.date = newevent.date;
        event.startTime = newevent.startTime;
        event.endTime = newevent.endTime;
        event.description = newevent.description;
        return true;
    } else {
        return false;
    }
}

exports.deleteById = function(id) {
    let index = events.findIndex(event => event.id === id);
    if (index !== -1) {
        events.splice(index, 1);
        return true;
    } else {
        return false;
    }
}