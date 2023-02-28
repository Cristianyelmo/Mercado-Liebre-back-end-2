// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const {register, processRegister, login, processLogin,logout} = require('../controllers/usersController');

const  ValidatorRegister  = require('../validations/ValidatorRegister');
const  ValidatorLogin  = require('../validations/ValidatorLogin');


router
    .get('/register',register)
    .post('/register',ValidatorRegister, processRegister)
    .get('/login',login)
    .post('/login',ValidatorLogin,processLogin)
    .get('/logout',logout)

module.exports = router;
