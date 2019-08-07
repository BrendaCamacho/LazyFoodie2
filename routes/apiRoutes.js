const axios = require("axios");
const db = require("../models/Recipes");
const path = require("path");

module.exports = function(app){
    app.post("/api/recipes", (req, res) => {
        db.Recipe.create(req.body).then(
            (response) => {
                res.json({successful: response});
            }
        ).catch(
            (err) => {
                res.json({error:err});
            }
        );
    });
}