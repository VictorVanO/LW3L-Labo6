let express = require('express');
let router = express.Router();

let formController = require('./controllers/formController.js');

router.post('/login', formController.login);
router.get('/cart', formController.cart);
router.post('/cart', formController.cart);
router.get('/add/:i', formController.add);
router.get('/remove/:i', formController.remove);

router.post('/', (req, res) => {
    req.session.user = req.body.username;
    // res.send('Hello ' + req.session.user); // Output : " Hello 'session.user' "
    res.redirect('/');
});

module.exports = router;