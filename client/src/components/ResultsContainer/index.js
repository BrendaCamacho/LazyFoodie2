
import React from "react";
import Card from "../Card";

function ResultsContainer (props){

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

}

export default ResultsContainer;
