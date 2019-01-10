const express = require('express');
const homeController = require('../controllers/home.js');

const router = express.Router();
router.get('/', homeController.getHome);

module.exports = router;