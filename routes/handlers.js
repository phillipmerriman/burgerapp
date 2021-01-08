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
        res.render("index", { burgers });
    });
});

  // Export routes for server.js to use.
  module.exports = router;  