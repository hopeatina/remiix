const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
var Post = require('./react-ui/src/Model/Post.js');
var Song = require('./react-ui/src/Model/Song.js');
var Concept = require('./react-ui/src/Model/Concept.js');
var Scene = require('./react-ui/src/Model/Scene.js');
var bodyParser = require('body-parser');
var username = process.env.DbUser;
var password = process.env.DbPassword;

const app = express();
const PORT = process.env.PORT || 5000;

const router = express.Router();

console.log(username, password);
mongoose.connect('mongodb://' + username + ':' + password + '@ds145158.mlab.com:45158/heroku_mnkk46b7');
// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, './react-ui/build')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//now we can set the route path & initialize the API
// router.get('/', function (req, res) {
//     res.json({message: 'API Initialized!'});
// });


//adding the /posts route to our /api router
router.route('/posts')
//retrieve all posts from the database
    .get(function (req, res) {
        //looks at our Post Schema
        Post.find(function (err, posts) {
            if (err)
                res.send(err);
            //responds with a json object of our database posts.
            res.json(posts)
        });
    })
    //post new post to the database
    .post(function (req, res) {
        var post = new Post();
        //body parser lets us use the req.body
        post.title = req.body.title;
        post.date = req.body.date;
        post.htmlText = req.body.htmlText;
        post.save(function (err) {
            if (err)
                res.send(err);
            res.json({message: 'Post successfully added!'});
        });
    });

var bugData = [
    {id: 1, priority: 'P1', status: 'Open', owner: 'Ravan', title: 'App crashes on open'},
    {id: 2, priority: 'P2', status: 'New', owner: 'Eddie', title: 'Misaligned border on panel'}
];

//Use our router configuration when we call /api
// app.get('/api/bugs', function(req, res) {
//     res.status(200).send(JSON.stringify(bugData));
// });

// Answer API requests.
app.use('/api',router);

// All remaining requests return the React app, so it can handle routing.
app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, './react-ui/build', 'index.html'));
});

app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
});