const express  = require('express');
const path = require('path');
const cookieSession = require('cookie-session');
const bcrypt = require('bcrypt');
const dbConnection = require('./database');
const { body, validationRusult} = require('express-validator');

const app = express();
app.use(express.urlencoded({extended:false}))

app.set('views' .path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2'],
    maxAge: 3600 * 1000 // 1hr
}))

app.listen(3000, ()=> console.log("Server is runnig..."))