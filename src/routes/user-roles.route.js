const express = require('express');
const userRolesController = require('../controllers/user-role');

const router = express.Router();
router.get('/', userRolesController.getUserRoles);

module.exports = router;