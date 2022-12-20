//! Pour le terminal : Terminal -> New Terminal -> Labo 6
//! Lancer le serveur avec "npm run serve" pour lancer le serveur avec nodemon

//Pour régler le problème avec mysql ASCII error : Utiliser la commande "mysqldump -u root -p formations -r academy.sql"
//Ensutie sur ma VM, utiliser "sudo mysql -u root -p --default-character-set=utf8 academy"
//Puis écrire dans <mysql> les commandes suivantes : 
//mysql> SET names 'utf8';
//mysql> SOURCE academy.sql

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


var cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/cookie', function(req, res){
    res.cookie("cookie_name", "my_cookie_value").send("Cookie is set ");
    });
    app.use(cookieParser());

app.get('/clearcookie', function(req, res) {
    res.clearCookie('cookie_name');
    res.send('Cookie deleted');
    });
    
// Show user session
app.get('/user', (req, res) => {
    res.send('Hello session ' + req.session.user);
});

// Logout endpoint
app.get('/logout', function (req, res) {
    req.session.destroy();
    res.send('Logout success !');
});


let routes = require('./routes');
app.use('/', routes);

var port = process.env.PORT || 3000;
// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Runnings on port " + port);
});