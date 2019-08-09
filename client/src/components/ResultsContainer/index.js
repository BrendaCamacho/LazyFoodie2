
import React from "react";
import Card from "../Card";

function ResultsContainer (props){

    if(props.path === "/"){
                {/* Abre if de results > 0*/}    
                if(props.recipesData.length > 0){

                    return (
                        <div class="recipesContainer col s12">
        
                            {props.recipesData.map((results) => {
                                const recipesInfo  = results.recipe
                                return <Card 
                                image = {recipesInfo.image}
                                label = {recipesInfo.label}
                                totalTime =  {recipesInfo.totalTime}
                                calories = {recipesInfo.calories}
                                yield = {recipesInfo.yield}
                                url = {recipesInfo.url}
                                ingredientLines  = {recipesInfo.ingredientLines}
                                path = {props.path}
                                />
                            })}
        
                        </div>
        
                    );
                {/* Cierra if de results > 0 */}    
                }else{
                    return(
                        <div></div>
                    )
                } {/* Cierra else de if results >0 */}
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
                            ingredientLines = {recipe.ingredientsLines}
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
