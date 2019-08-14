const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecipeSchema = new Schema ({

    label: String,
    image: String, 
    totalTime: Number,
    calories:Number,
    yield:String,
    url: String,
    ingredientsLines:[String],
    date :{
        type: Date,
        default: Date.now
    }
});

module.exports = Recipe = mongoose.model('recipes', RecipeSchema)