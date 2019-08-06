import React from "react";

require("../../App.css")

function SearchButton(props){

return(

        <button 
        onClick= {state.SearchClick}
        className="btn waves-effect waves-light childFlexSearch" 
        id= "addIngredients"
        type="submit" 
        name="action">
            
        Add
        <i className="material-icons right">add</i>
        </button> 



);


}

export default SearchButton;
