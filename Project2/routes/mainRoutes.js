const express = require('express');

const controller = require('../controllers/mainController');
const router = express.Router();

// GET /index: send home page to the user
router.get('/', controller.index);

// GET /about: send about page to the user
router.get('/', controller.about);

// GET /contact: send contact page to the user
router.get('/', controller.contact);

module.exports = router;