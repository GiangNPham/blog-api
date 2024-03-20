var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  req.session.destroy((err) => {
    if (err) console.error(err);
    else res.redirect("/");
  });
});

module.exports = router;
