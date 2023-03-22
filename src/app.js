const express = require("express");
const app = express();
const hbs = require("hbs");
const routes = require("./routes/main");
const connectDB = require("./connect");
const bodyParser = require("body-parser");
const md5 = require('md5');

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const port = process.env.PORT || 1335;
app.use("/static", express.static("public"));
app.use("/", routes);

// template engine i.e. hbs which stands for handlebar
app.set("view engine", "hbs");
app.set("views", "views");

// making partials
hbs.registerPartials("views/partials");

app.listen(port, () => {
  console.log("server is started at: " + port);
});



// calling that databse file or function for connection which is connect.js

connectDB();
