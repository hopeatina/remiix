const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const router = require('./routes');

var MONGO_URI = process.env.MONGODB_URI;

const app = express();
const PORT = process.env.PORT || 3001;


var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };

console.log(MONGO_URI);
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
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

// Priority serve any static files.
// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("react-ui/build"));
// }

app.use(express.static(path.resolve(__dirname, './react-ui/build')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Answer API requests.
app.use('/api', router);

// All remaining requests return the React app, so it can handle routing.
app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, './react-ui/build', 'index.html'));
});

app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
});