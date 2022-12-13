let express = require('express');
let router = express.Router();

let formController = require('./controllers/formController.js');

router.post('/login', formController.login);
router.post('/cart', formController.cart);
router.post('/add', formController.add)

router.post('/', (req, res) => {
    req.session.user = req.body.username;
    // res.send('Hello ' + req.session.user); // Output : " Hello 'session.user' "
    res.redirect('/');
});

module.exports = router;