// Import express
let express = require('express');

// Initialize the app
let app = express();

// Setup sever port
var port = process.env.PORT || 3000;

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

// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Runnings on port " + port);
});