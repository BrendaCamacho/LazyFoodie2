import React from "react";


function SearchInput(props){

    return(
        <div className="input-field col m8 l6 offset-m2 offset-l3">

            <label id="labelAdd" className="active" className="ingredients">I have this ingredient what can I cook?</label>
            <input id="ingredients" type="text" className="validate childflexInput"  required=""  aria-required="true"     
                onChange={props.onChange}
                value={props.value}
                name="search" 
                type="text" 
                className="validate center-align"
                id="ingredients"

            />

            <button 
            onClick= {props.onClick}
            className="btn waves-effect waves-light childFlexSearch" 
            id="addIngredients" 
            type="submit"
            name="action">

            Add
             <i className="material-icons right">add</i>
            </button>                
   
   
           
           
             </div>


    );

   }   

export default SearchInput;
