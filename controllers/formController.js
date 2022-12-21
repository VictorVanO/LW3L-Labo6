let User = require('../models/userModel.js');

let userNumber = 0;
let userList = [];

exports.reservationForm = function(req, res) {
    // let user = new User("Dupont", "Paul");
    // userList.push(user);
    userNumber += req.body.nbseat;
    res.render('person.ejs', {userNumber: userNumber});
}

exports.validationForm = function(req, res) {
    res.render('validation.ejs');
}

exports.confirmationForm = function(req, res) {
    res.render('confirmation.ejs');
}

exports.cancelForm = function(req, res) {
    userNumber = 0;
    req.session.destroy();
    res.redirect('/');
}