import React from "react";
// import { Link } from "react-router-dom";
require("../..//App.css")
function Card() {
    return  (
        <div className="recipesContainer col s12">
             <div className="cardContainer col s12 m6 l4 xl3">
                <div className="card sticky-action col s12">
                    <div className="card-image waves-effect waves-block waves-light">
                            <img className="activator" src="https://www.edamam.com/web-img/417/417cb5d5c104db03142e6cbea430b259.jpg"></img>
                     </div>
                <div className="card-content">
                    <div className="cardTitle">
                        <div className="card-title activator truncate flexTitle">Milk Liqueur</div>
                        <div className = "card-title activator">
                            <i className= "material-icons small right">add_circle</i>
                        </div>

                    </div>
                    <div className="cardText">
                        <p>
                        N/A
                        <i className="material-icons left">timer</i>
                        </p>
                    </div>
                    <div className="cardText">
                        <p>
                        3410 cal
                        <i className="material-icons left">mood</i>
                        </p>
                    </div>
                    </div>

                <div className="card-reveal" >
                    <div className="card-title flexTitle truncate">
                    Milk Liqueur
                    </div>
                    <div className="card-title">
                        <i className="material-icons small right">close</i>
                    </div>
                    <p className="yields"> 8 servings</p>
                    
                    <ul>
                        <li>2 1/2 cups grappa or unflavored vodka</li>
                        <li>2 cups whole milk</li>
                        <li>2 cups sugar</li>
                        <li>2 ounces bittersweet chocolate (preferably 70%), grated</li>
                        <li>1/2 lemon, seeded and chopped, with rind</li>
                    </ul>
                    <a class="waves-effect waves-light btn-small" href="http://www.seriouseats.com/recipes/2010/08/milk-liqueur-recipe.html" target="_blank">Full Recipe<i class="material-icons right">add</i></a>
                    

                </div>
                </div>


                </div>
             </div>
        
        
        
        
        
        
        
        
    )




}
export default Card;