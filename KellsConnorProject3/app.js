// Require modules
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const eventRoutes = require('./routes/eventRoutes');
const mainRoutes = require('./routes/mainRoutes');

// Create app
const app = express();

// Configure app
let port = 8084;
let host = 'localhost';
let url = 'mongodb://localhost:27017/events'
app.set('view engine', 'ejs');

// Connect to MongoDB
mongoose.connect(url)
.then(() => {
    // Start the server
    app.listen(port, host, () => {
        console.log('Server is running on port', port);
    })
})
.catch(err => console.log(err.message));

// Mount middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));
app.use(methodOverride('_method'));

// Setup routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/event', (req, res) => {
    res.render('events');
});

app.use('/events', eventRoutes);
app.use('/', mainRoutes);

// Error handling
app.use((req, res, next) => {
    let err = new Error('The server cannot locate ' + req.url);
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    console.log(err.stack);
    if (!err.status) {
        err.status = 500;
        err.message = ("Internal Server Error");
    }
    res.status(err.status);
    res.render('error', {error: err});
});