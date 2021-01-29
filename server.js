// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

// Dependencies
const bodyParser = require('body-parser');

// Middleware

// Here we are configuring Express to use our body-parser and middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Cors for cross origin allowance
// const cors = require('cors');
// app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

const port = 8000;

// Spin up the server
const server = app.listen(port, listening);
// const server = app.listen(port, () => console.log(`running on localhost: ${port}`))
// Callback to debug
function listening(){
    console.log('server running');
    console.log(`running on localhost: ${port}`);
};

// Empty object to be sent in Res response
const appData = {};
app.get('/', function(req, res){
    console.log(req);
    res.send(appData);
})

// Empty object to store post data
const data = [];
app.post('/addMovie', addMovie);

function addMovie(req, res){
    data.push(req.body);
    console.log(data);
    res.send(`Data received: ${data}`);
}