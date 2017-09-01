var express = require("express");

var router = express.Router();
var db = require("../models/");

// get route -> index
router.get("/", function(req, res) {
  res.redirect("/burgers");
});



router.get("/burgers", function(req, res) {
  // express callback response by calling burger.selectAllBurger
  db.burger.findAll({})
  .then(function(burgerData){
     res.render("index", { burger_data: burgerData });
   });
});


// post route -> back to index
router.post("/burgers/create", function(req, res) {
  // takes the request object using it as input for buger.addBurger
  console.log(req.body);
    db.burger.create({
      name: req.body.burger_name
    })
    .then(function(burgerData) {
      res.json(burgerData);
    });
  });



/*
  burger.create(req.body.burger_name, function(result) {
    // wrapper for orm.js that using MySQL insert callback will return a log to console,
    // render back to index with handle
    console.log(result);
    res.redirect("/");
  });
});
*/


// put route -> back to index
router.put("/burgers/update", function(req, res) {
   db.burger.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
    .then(function(burgerData) {
      res.json(burgerData);
    });
});

module.exports = router;
