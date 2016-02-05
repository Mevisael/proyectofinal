var express = require('express');
var router = express.Router();

router.get('/contactanos', function(req, res, next) {
  res.render('contacto/contactanos',{});
});

module.exports = router;
