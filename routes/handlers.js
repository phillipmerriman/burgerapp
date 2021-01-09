// configure our route to be using the express router
const express = require("express");
const router = express.Router();

const orm = require("../config/orm");

router.get("/", function (req, res) {
    // res.json({
    //     message: "Hello World"
    // });
    orm.selectAll(function(error, burgers) {
        if (error) {
            return res.status(501).json({
                message: "Not able to query the database"
            });
        }

        console.log('Burgers: ', burgers);
        res.render("index", { burgers, style: 'style' });
    });
});

// router.get("/all")

router.post('/add', (req, res) => {
    
    const burgerName = req.body.burger_name;

    orm.isnertOne(burgerName, function(error, burger) {
        if (error) {
            return res.status(401).json({
                message: "Not able to add the burger"
            });
        }
        //set up data to be inserted into database
        return res.json({
           burger_name: burgerName,
           id: burger.insertId,
           devoured: 0
        });
    });
});

  // Export routes for server.js to use.
  module.exports = router;  