const express = require('express');
const controller = require('../controllers/userController');

const router = express.Router();

// setup similar to storyRoutes

// FOR USER SIGN UP
//GET /users/new: send form to create new user account
router.get('/new', controller.new);
//POST /users: create new user account
router.post('/', controller.create);

// FOR USER LOGIN
//GET /users/login: send for to login
router.get('/login', controller.userLogin);
//POST /users/login: authenticate user's login
router.post('/login', controller.login);

// FOR USER PROFILE
//GET /users/profile: send user's profile page
router.get('/profile', controller.profile);

// FOR USER LOGOFF
//POST /users/logout: logout a user
router.get('/logout', controller.logout);

module.exports = router;