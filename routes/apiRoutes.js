const axios = require("axios");
const Recipe = require("../models/Recipes");
const path = require("path");

module.exports = function(app){
    app.post("/api/recipes", (req, res) => {
        Recipe.create(req.body).then(
            (response) => {
                res.json({successful: response});
            }
        ).catch(
            (err) => {
                res.json({error:err});
            }
        );
    });

    app.get("/api/recipes", (req, res) => {
        Recipe.find({}).sort({date:-1}).then(
        (recipesData) => {
            res.json(recipesData);
            }
        ).catch(
            (err) => {
                res.json({error:err});
            }
        );
    });

    app.delete("/api/recipes/:id", (req, res)=>{
        Recipe.findByIdAndDelete(req.params.id).then(
            (response) =>{
                res.json({successful:response});
            }
        ).catch(
            (err) => {
                res.json({error:err});
            }
        );
    });
}