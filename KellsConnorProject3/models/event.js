// const { dateTime, DateTime } = require("luxon");
// const {v4: uuidv4} = require('uuid');

// const events = [
// {
//     id: '1',
//     title: 'Halo: HCS Majors Livestream',
//     host: 'HCS',
//     category: 'Livestream',
//     location: 'HCS Twitch Channel',
//     date: '2022-10-25',
//     startTime: '18:30',
//     endTime: '21:00',
//     description: 'The Halo Championship Major livestream'
// },
// {
//     id: '2',
//     title: 'Apex Legends: Team Qualifiers Livestream',
//     host: 'EA eSports',
//     category: 'livestream',
//     location: 'Apex Twitch Channel',
//     date: '2022-10-25',
//     startTime: '10:45',
//     endTime: '15:00',
//     description: 'The Apex Legends team qualifiers livestream for the upcoming competitive season.'
// },
// {
//     id: '3',
//     title: 'Call of Duty: CDL Major 1 Livestream',
//     host: 'COD World League',
//     category: 'stream',
//     location: 'CDL Twitch Channel',
//     date: '2022-12-5',
//     startTime: '12:30',
//     endTime: '15:30',
//     description: 'The Call of Duty competetive league Major 1 Livestream.'
// },
// {
//     id: '4',
//     title: 'Halo: 4v4 Custom Party Games',
//     host: 'Niner Esports',
//     category: 'group play',
//     location: 'Student Union, Room 310',
//     date: '2022-11-2',
//     startTime: '11:00',
//     endTime: '13:00',
//     description: 'Come meet other Halo fans and play fun customized game modes (8 people needed!)',
// },
// {
//     id: '5',
//     title: 'Apex Legends: Trios Ranked Play',
//     host: 'Niner Esports',
//     category: 'group Play',
//     location: 'Xbox Live',
//     date: '2022-10-25',
//     startTime: '09:30',
//     endTime: '12:30',
//     description: 'Play with other ranked Apex Legends players as a trio to rank up in competitive online play (Three players needed).',
// },
// {
//     id: '6',
//     title: 'Call of Duty: Search and Destroy Tournament',
//     host: 'Niner Esports',
//     category: 'play',
//     location: 'Student Union, Room 200',
//     date: '2022-10-25',
//     startTime: '15:00',
//     endTime: '17:00',
//     description: 'Play in an in-person Call of Duty: Search and Destroy tournament (6v6) and meet other CoD fans (12 players needed).',
// }
// ];

// exports.find = () => events;

// exports.findById = function(id) {
//     return events.find(event => event.id === id);
// }

// exports.save = function(event) {
//     event.id = uuidv4();
//     events.push(event);
// }

// exports.updateById = function(id, newevent) {
//     let event = events.find(event => event.id === id);
//     if(event) {
//         event.title = newevent.title;
//         event.host = newevent.host;
//         event.category = newevent.category;
//         event.location = newevent.location;
//         event.date = newevent.date;
//         event.startTime = newevent.startTime;
//         event.endTime = newevent.endTime;
//         event.description = newevent.description;
//         return true;
//     } else {
//         return false;
//     }
// }

// exports.deleteById = function(id) {
//     let index = events.findIndex(event => event.id === id);
//     if (index !== -1) {
//         events.splice(index, 1);
//         return true;
//     } else {
//         return false;
//     }
// }

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title:       {type: String, required: [true, 'Title is required']},
    host:        {type: String, required: [true, 'Host is required']},
    category:    {type: String, required: [true, 'Category is required']},
    location:    {type: String, required: [true, 'Location is required']},
    date:        {type: Date, required: [true, 'Date is required']},
    startTime:   {type: String, required: [true, 'Start Time is required']},
    endTime:     {type: String, required: [true, 'End Time is required']},
    description: {type: String, required: [true, 'Description is required'], minLength: [10, 'The description should have at least 10 characters']}
},
{timestamps: true}
);

// Collection name is events in the database
module.exports = mongoose.model('Event', eventSchema);