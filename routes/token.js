var express=require('express');
var router =express.Router();
router.get("/", function (req, res, next) {

    res.render("token", { title: "token" });
  });

module.exports = router;