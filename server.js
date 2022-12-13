//! Pour le terminal : Terminal -> New Terminal -> Labo 6
//! Lancer le serveur avec "npm run serve" pour lancer le serveur avec nodemon

// Start server with express
let express = require('express');
let app = express(); // Instancier le serveur
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));


// Database connection
var mysql = require("mysql");
var connection = mysql.createConnection({
    host        : 'localhost',
    user        : 'root',
    password    : 'root',
    database    : 'formations'
});
connection.connect(function(error) {if (error) console.log(error);});


let session = require("express-session");
app.use(session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: true
    })
);

// Set route
// Méthode HTTP 'get' dont on déclare le chemin et 2 paramètres
app.get('/', (req, res) => {
    connection.query("select * from formation;", function(error, result) {
        if(error) console.log(error);
        res.render('home.ejs', {formations: result});
    });
}); 

let routes = require('./routes');
app.use('/', routes);

// Show user session
app.get('/user', (req, res) => {
    res.send('Hello session ' + req.session.user);
});

// Logout endpoint
app.get('/logout', function (req, res) {
    req.session.destroy();
    res.send('Logout success !');
});

var port = process.env.PORT || 3000;
// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Runnings on port " + port);
});