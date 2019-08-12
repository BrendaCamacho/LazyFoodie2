
import React from "react";
import Card from "../Card";
// import NoResults from "../NoResults";


function ResultsContainer (props){
    
    if(props.path === "/"){
        if(props.recipesData.length > 1) {


                        return(
                        <div className="recipesContainer col s12">
        
                            {props.recipesData.map((results) => {
                                 const recipesInfo  = results.recipe


                                    return <Card 
                                            image = {recipesInfo.image}
                                            label = {recipesInfo.label}
                                            totalTime =  {recipesInfo.totalTime}
                                            calories = {recipesInfo.calories}
                                            yield = {recipesInfo.yield}
                                            url = {recipesInfo.url}
                                            path = {props.path}
                                            ingredientLines  = {recipesInfo.ingredientLines}
                                            />
                            })}
                       </div>
                       )


         }else if (props.recipesData.length == 0 && props.recipesData == false) {
                         return(
                         <div className="no-results">
                                 <p>Sorry, no results available for this query. Try again</p>
                                 <i className="material-icons sad-face">sentiment_very_dissatisfied</i>
                        </div>
                                )
                                            
          }
                        
    }else if(props.path === "/saved"){
        return(
            <div class="recipesContainer col s12">
                
                        {props.savedRecipes.map((recipe) => {
                            return <Card 
                            image = {recipe.image}
                            label = {recipe.label}
                            totalTime =  {recipe.totalTime}
                            calories = {recipe.calories}
                            yield = {recipe.yield}
                            url = {recipe.url}
                            ingredientLines  = {recipe.ingredientsLines}
                            id = {recipe._id}
                            key = {recipe._id}
                            path = {props.path}
                            handleStateChange = {props.handleStateChange}
                            />
                            
                        })}
            </div>
        )
    }

}  



export default ResultsContainer;
