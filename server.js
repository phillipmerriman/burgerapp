// Dependencies
const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");

// import routes
const routes = require("./routes/handlers");

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// Create an instance of the express app.
const app = express();

app.use(express.static('public'));
app.use(express.static('public/assets/images'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride("_method"));

// Set Handlebars as the default templating engine. 
app.engine("handlebars", exphbs({ defaultLayout: "main" })); //"main" is the name of your main layout. 
app.set("view engine", "handlebars");

app.use("/", routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, () => {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });