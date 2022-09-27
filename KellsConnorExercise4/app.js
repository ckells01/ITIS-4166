// Require modules
const express = require('express');
const morgan = require('morgan');
const ejs = require('ejs');
const storyRoutes = require('./routes/storyRoutes');

// Create app
const app = express();

// Configure app
let port = 3000;
let host = 'localhost';
app.set('view engine', 'ejs');

// Mount middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));

// Setup routes
app.get('/', (req, res) => {
    res.render('index');
});

app.use('/stories', storyRoutes);

// Start server
app.listen(port, host, () => {
    console.log('Server is running on port', port);
});