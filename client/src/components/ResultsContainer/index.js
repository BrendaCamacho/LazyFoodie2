
import React from "react";
// import Card from "../Card";
// import Card from "./Card";

function ResultsContainer (props){

    if  (props.path ==="/"){
        if(props.recipesData.length > 0){

        return (
            <div className="row">
                <h1> CARDS PLACE</h1>

            {props.recipesData.map((recipes) => {
                console.log(recipesData)


                

                
                
                }
            )
            }
        

            </div>

        )
        
        

        }
    }
}

export default ResultsContainer;

