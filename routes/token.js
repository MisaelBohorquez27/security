var express=require('express');
var router =express.Router();

router.get("/", function (req, res, next) {
    res.render("token", {username:req.cookies['username']});
  });

module.exports = router;