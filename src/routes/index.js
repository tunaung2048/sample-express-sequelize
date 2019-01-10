const express = require('express');
const homeRoute = require('./home.route');
const usersRoute = require('./users.route');
const userRolesRoute = require('./user-roles.route');


const router = express.Router();
router.use('/', homeRoute);
router.use('/users', usersRoute);
router.use('/user-roles', userRolesRoute);

module.exports = router;