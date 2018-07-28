// import dependency modules
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database'); 
const multer = require('multer');

// connect to database
mongoose.connect(config.database);

// on connection
mongoose.connection.on('connected', (err) => {
    console.log('Connected to database '+config.database);
});

// on error
mongoose.connection.on('error', () => {
    console.log('Database error '+err);
});

// initialize express app
const app = express();

// file containing routes
const users = require('./routes/users');

// file containing posts routes
const posts = require('./routes/posts');

// file containing categories routes
const categories = require('./routes/categories');

// set the directory for the uploads to be uploaded to
const DIR = './uploads/';

//define the type of upload multer would be doing and pass in its destination, its a single file with the name photo
const upload = multer({dest: DIR}).single('photo');

// port number
const port = process.env.PORT || 8080;

// add middleware for cors
app.use(cors());

// set static folder, all angular files will go on this folder
app.use(express.static(path.join(__dirname, 'public'))); 

// add middleware for body-parser
app.use(bodyParser.json());

// add middleware for passport
app.use(passport.initialize());
app.use(passport.session());

// import passport config
require('./config/passport')(passport);

// users file containing routes
app.use('users', users);

// posts file containing posts routes
app.use('posts', posts);

// categories file containing categories routes
app.use('categories', categories);

// index route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// start server
app.listen(port, () => {
    console.log('Server started on port '+port);
});