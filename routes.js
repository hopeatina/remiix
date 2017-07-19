/**
 * Created by theon on 7/17/2017.
 */
const express = require('express');
var Post = require('./Model/Post.js');
var Song = require('./Model/Song.js');
var Concept = require('./Model/Concept.js');
var Scene = require('./Model/Scene.js');
const router = express.Router();

// Posts --> WRDZ
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
    post.save(function (err) {
        if (err)
            res.send(err);
        res.json({message: 'Post successfully added!'});
    });
});

// Concepts --> WRDZ
//adding the /posts route to our /api router
router.get('/concept', function (req, res) {
    // looks at our Post Schema
    Concept.find(function(err, posts) {
        if (err) {
            res.json(err)
        } else {
            res.json(posts);
        }
    });
});

//post new post to the database
router.post('/concept', function (req, res) {
    var concept = new Concept();
    //body parser lets us use the req.body
    concept.title = req.body.title;
    concept.createDate = new Date();
    concept.description = req.body.description;
    concept.mainImg = req.body.mainImg;
    concept.more = req.body.more;
    concept.save(function (err) {
        if (err)
            res.send(err);
        res.json({message: 'Concept successfully added!'});
    });
});

// Scenes --> Reality
//adding the /scene route to our /api router
router.get('/scene', function (req, res) {
    // looks at our Post Schema
    Scene.find(function(err, posts) {
        if (err) {
            res.json(err)
        } else {
            res.json(posts);
        }
    });
});

//post new song to the database
router.post('/scene', function (req, res) {
    var scene = new Scene();
    //body parser lets us use the req.body
    scene.title = req.body.title;
    scene.createDate = Date();
    scene.sceneRef = req.body.sceneRef;
    scene.more = req.body.more;
    scene.thumbnail = req.body.thumbnail;
    scene.save(function (err) {
        if (err)
            res.send(err);
        res.json({message: 'Scene successfully added!'});
    });
});

// Song --> Tunez
//adding the /posts route to our /api router
router.get('/song', function (req, res) {
    // looks at our Post Schema
    Song.find(function(err, posts) {
        if (err) {
            res.json(err)
        } else {
            res.json(posts);
        }
    });
});

//post new post to the database
router.post('/song', function (req, res) {
    var song = new Song();
    //body parser lets us use the req.body
    song.title = req.body.title;
    song.createDate = new Date();
    song.thumbnail = req.body.thumbnail;
    song.time = req.body.time;
    song.save(function (err) {
        if (err)
            res.send(err);
        res.json({message: 'Song successfully added!'});
    });
});

module.exports = router;