const { dateTime, DateTime } = require("luxon");
const {v4: uuidv4} = require('uuid');

const events = [
{
    id: '1',
    title: 'Halo: HCS Majors Livestream',
    host: 'HCS',
    category: 'Livestream',
    location: 'HCS Twitch Channel',
    date: '2022-10-25',
    startTime: '18:30',
    endTime: '21:00',
    description: 'The Halo Championship Major livestream'
},
{
    id: '2',
    title: 'Apex Legends: Team Qualifiers Livestream',
    host: 'EA eSports',
    category: 'livestream',
    location: 'Apex Twitch Channel',
    date: '10/28/2022',
    startTime: '12:30 PM',
    endTime: '04:00 PM',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia, nulla quis volutpat pellentesque.'
},
{
    id: '3',
    title: 'Call of Duty: CDL Major 1 Livestream',
    host: 'COD World League',
    category: 'stream',
    location: 'CDL Twitch Channel',
    date: '10/25/2022',
    startTime: '12:30 PM',
    endTime: '12:30 PM',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia, nulla quis volutpat pellentesque.'
},
{
    id: '4',
    title: 'Halo: 4v4 Custom Games',
    host: 'Niner Esports',
    category: 'group play',
    location: 'Location',
    date: '11/1/2022',
    startTime: '02:30 PM',
    endTime: '05:30 PM',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia, nulla quis volutpat pellentesque.',
},
{
    id: '5',
    title: 'Apex Legends: Trios Ranked Play',
    host: 'Niner Esports',
    category: 'group Play',
    location: 'Location',
    date: '12/5/2022',
    startTime: '09:30 PM',
    endTime: '12:30 PM',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia, nulla quis volutpat pellentesque.',
},
{
    id: '6',
    title: 'Call of Duty: Search and Destroy Tournament',
    host: 'Niner Esports',
    category: 'play',
    location: 'Location',
    date: '11/15/2022',
    startTime: '12:30 PM',
    endTime: '12:30 PM',
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
        console.log("TIME STRING IS: " + newevent.startTime);
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