const { dateTime, DateTime } = require("luxon");
const{v4: uuidv4} = require('uuid');

const stories = [
{
    id: '1',
    title: 'A funny story',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia, nulla quis volutpat pellentesque.',
    author: 'Connor',
    createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
},
{
    id: '2',
    title: 'It is raining',
    content: 'Aliquam viverra porttitor est, et fermentum ligula placerat quis. Etiam egestas tincidunt ipsum.',
    author: 'Connor',
    createdAt: DateTime.local(2022, 9, 27, 14, 45).toLocaleString(DateTime.DATETIME_SHORT)   
}
];

exports.find = () => stories;


exports.findById = function(id) {
    return stories.find(story => story.id === id);
}

exports.save = function(story) {
    story.id = uuidv4();
    story.createdAt = DateTime.local(2022, 9, 27, 14, 45).toLocaleString(DateTime.DATETIME_SHORT);
    stories.push(story);
}

exports.updateById = function(id, newStory) {
    let story = stories.find(story => story.id === id);
    if(story) {
        story.title = newStory.title;
        story.content = newStory.content;
        return true;
    } else {
        return false;
    }
}

exports.deleteById = function(id) {
    let index = stories.findIndex(story => story.id === id);
    if (index !== -1) {
        stories.splice(index, 1);
        return true;
    } else {
        return false;
    }
}