const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecipeSchema = new Schema ({

    label: String,
    img: String, 
    time: String,
    calories:String,
    servings:String,
    ingredientes:[String],
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