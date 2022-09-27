const { dateTime, DateTime } = require("luxon");

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

console.log(stories[1]);