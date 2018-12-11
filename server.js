const express = require('express');
const path = require('path');
const http = require('http');
const compression = require('compression');
const bodyParser = require('body-parser');
const auth =  require('./authentication');


const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
process.env.NODE_ENV = "testCloud";


// Compress static assets to enhance performance. 
// Decrease the download size of your app through gzip compression:
app.use(compression());

//
// appname is the name of the "defaultProject" value that was set in the angular.json file.
// When built in production mode using 'ng build --prod', a ./dist/{appname} folder is
// created, containing the generated application. The appname points to that folder.
//
// Replace the name below to match your own "defaultProject" value!
//
const appname = 'my-first-app';

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist', appname)));

//Catch all except login and register
app.all( new RegExp("^((?!login|register).)*$"), function (req, res, next) {

    console.log("VALIDATE TOKEN")
  
    var token = (req.header('X-Access-Token')) || '';
  
    auth.decodeToken(token, (err, payload) => {
        if (err) {
            console.log('Error handler: ' + err.message);
            res.status((err.status || 401 ));
        } else {
            next();
        }
    });
  });

app.use('/api/user', require('./routes/user.routes'));
app.use('/api/trainingschedule', require('./routes/trainingschedule.routes'));
app.use('/api/exercise', require('./routes/exercise.routes'));
app.use('/api/food', require('./routes/food.routes'));




// Catch all routes and return the index file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', appname, 'index.html'));
});

// Get port from environment and store in Express.
const port = process.env.PORT || '4200';
app.set('port', port);
// Create HTTP server.
const server = http.createServer(app);
// Listen on provided port, on all network interfaces.
server.listen(port, () => console.log(`Angular app \'${appname}\' running on port ${port}`));
