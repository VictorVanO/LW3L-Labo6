//! Pour le terminal : Terminal -> New Terminal -> Labo 6
//! Lancer le serveur avec "npm run serve" pour lancer le serveur avec nodemon

// Start server with express
let express = require('express');
let app = express(); // Instancier le serveur
app.use(express.urlencoded({extended: true}));


var mysql = require("mysql");
// Database connection
var connection = mysql.createConnection({
    host        : 'localhost',
    user        : 'root',
    password    : 'root',
    database    : 'tasks'
});
connection.connect(function(error) {if (error) console.log(error);});

app.use(express.static('public'));
// Launch server
app.listen(3000, function() {
    console.log('Server is running on port 3000');
});
