const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecipeSchema = new Schema ({

    label: String,
    image: String, 
    totalTime: String,
    calories:String,
    yield:String,
    url: String,
    ingredientsLines:[String],
    date :{
        type: Date,
        default: Date.now
    },
    userID: {
        type:Schema.Types.ObjectId,
        ref:"User"
    }
})

module.exports = Recipe = mongoose.model('recipes', RecipeSchema)