const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

var bodyParser = require('body-parser');

var MONGO_URI = process.env.MONGODB_URI;

const app = express();
const PORT = process.env.PORT || 3001;
app.set("PORT", process.env.PORT || 3001);

const router = require('./routes');

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

// Priority serve any static files.
if (process.env.NODE_ENV === "production") {
    app.use(express.static("react-ui/build"));
}
// app.use(express.static(path.resolve(__dirname, './react-ui/build')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Answer API requests.
app.use('/api', router);

// All remaining requests return the React app, so it can handle routing.
// app.get('*', function (request, response) {
//     response.sendFile(path.resolve(__dirname, './react-ui/build', 'index.html'));
// });

app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
});