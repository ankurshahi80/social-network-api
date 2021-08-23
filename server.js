// create an express application
const express = require('express'); // import express.js
const mongoose = require('mongoose'); // import Mongoose

const app = express();// instantiate the server

app.use(require('./routes'));

//connect Mongoose when the app starts
mongoose.connect('mongodb://localhost/social-network',{
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.set('debug',true);
app.listen(3001, () => console.log('🌍 Connected on localhost:3001'));//listen for connections on port 3001