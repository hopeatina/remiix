const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
var Post = require('./react-ui/src/Model/Post.js');
var Song = require('./react-ui/src/Model/Song.js');
var Concept = require('./react-ui/src/Model/Concept.js');
var Scene = require('./react-ui/src/Model/Scene.js');
var bodyParser = require('body-parser');


const app = express();
const PORT = process.env.PORT || 5000;

const router = express.Router();

mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds145158.mlab.com:45158/heroku_mnkk46b7')
// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, './react-ui/build')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//now we can set the route path & initialize the API
router.get('/', function (req, res) {
    res.json({message: 'API Initialized!'});
});
//Use our router configuration when we call /api
app.use('/api', router);
// Answer API requests.
// app.get('/api', function (req, res) {
//     // res.set('Content-Type', 'application/json');
//     res.json({"message":"Hello from the custom server!"});
// });

// All remaining requests return the React app, so it can handle routing.
app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, './react-ui/build', 'index.html'));
});

app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
});