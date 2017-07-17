const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
var Post = require('./Model/Post.js');
var Song = require('./Model/Song.js');
var Concept = require('./Model/Concept.js');
var Scene = require('./Model/Scene.js');
var bodyParser = require('body-parser');
var username = process.env.DbUser;
var password = process.env.DbPassword;
var MONGO_URI = process.env.MONGODB_URI;

const app = express();
const PORT = process.env.PORT || 5000;
const router = express.Router();

var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };

console.log(username, password, MONGO_URI);
mongoose.connect(MONGO_URI, options, function (error) {
    if (error)
        console.log(error);
    else
        console.log("connection successful");
    console.log(mongoose.connection.readyState);

});
// Use native promises
// mongoose.Promise = global.Promise;
// assert.equal(query.exec().constructor, global.Promise);

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, './react-ui/build')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//adding the /posts route to our /api router
router.get('/post', function (req, res) {
    // looks at our Post Schema
    Post.find(function(err, posts) {
        if (err) {
            res.json(err)
        } else {
            res.json(posts);
        }
    });
});

//post new post to the database
router.post('/post', function (req, res) {
    var post = new Post();
    //body parser lets us use the req.body
    post.title = req.body.title;
    post.date = req.body.date;
    post.htmlText = req.body.htmlText;
    pswost.save(function (err) {
        if (err)
            res.send(err);
        res.json({message: 'Post successfully added!'});
    });
});

// Answer API requests.
app.use('/api', router);

// All remaining requests return the React app, so it can handle routing.
app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, './react-ui/build', 'index.html'));
});

app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
});