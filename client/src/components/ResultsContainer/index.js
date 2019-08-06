
import React from "react";
import Card from "../Card";

function ResultsContainer (props){

    // if  (props.path ==="/"){
    //     if(props.recipesData.length > 0){

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
        )
}
        


        
        

            
//     }
// }

export default ResultsContainer;
