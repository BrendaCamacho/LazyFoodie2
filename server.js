const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
var cors = require('cors')
var bodyParser = require('body-parser')
const mongoose = require('mongoose')

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

mongoose.connect(process.env.MONGODB_URI || "mongodb://user:user123@ds117605.mlab.com:17605/heroku_z55rbzzx")

// const mongoURI = 'mongodb://brenda:brenda123@ds117605.mlab.com:17605/heroku_z55rbzzx'

// mongoose
//   .connect(process.env.MONGODB_URI ||
//     mongoURI,
//     { useMongoClient: true }
//   )
//   .then(() => console.log('MongoDB Connected'))
//   .catch(err => console.log(err))

var Users = require('./routes/Users')

app.use('/users', Users)

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//========================================================
//     ROUTES                
//========================================================

require("./routes/apiRoutes")(app);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  console.log("App get" + req.query.id);
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});