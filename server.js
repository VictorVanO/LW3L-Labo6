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


// Launch server
app.listen(3000, function() {
    console.log('Server is running on port 3000');
});


// Set route
// Méthode HTTP 'get' dont on déclare le chemin et 2 paramètres
app.get('/', (req, res) => {
    connection.query("select * from formation;", function(error, result) {
        if(error) console.log(error);
        res.render('Labo6.ejs', {formations: result});
    });
}); 