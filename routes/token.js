var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');


router.get("/", function (req, res, next) {
  var token = jwt.sign({
    exp: Math.floor(Date.now() / 1000) + (60 * 60),
    data: 'foobar'  
  }, process.env.TOKEN_SECRET); 
  res.render("token", { username: req.cookies['username'], token: token });
});

module.exports = router;
