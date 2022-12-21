let express = require('express');
let router = express.Router();

let formController = require('./controllers/formController.js');

// Liste des routes vers les contrôleurs
router.get('/', (req, res) => res.redirect('/reservation'))

router.post('/reservation', formController.reservationForm);
router.post('/validate', formController.validationForm);
router.get('/confirmation', formController.confirmationForm);
router.get('/cancel', formController.cancelForm);

// router.post('/', (req, res) => {
//     req.session.user = req.body.username;
//     res.redirect('/');
// });

module.exports = router;