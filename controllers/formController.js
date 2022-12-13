// Database connection
var mysql = require("mysql");
var connection = mysql.createConnection({
    host        : 'localhost',
    user        : 'root',
    password    : 'root',
    database    : 'formations'
});
connection.connect(function(error) {if (error) console.log(error);});

exports.login = function(req, res) {
    res.render('login.ejs', {username: req.session.user, text:''});
}

exports.cart = function(req, res) {
    if (req.session.user != null) {
        connection.query("select * from cart;", function(error, result) {
            if(error) console.log(error);
            res.render('cart.ejs', {formations: result});
        });
    }
    else {
        res.render('login.ejs', {username: req.session.user, text:'Commencez par vous connecter'})
    }
}

exports.add = function(req, res) {
    res.redirect('/cart');
}