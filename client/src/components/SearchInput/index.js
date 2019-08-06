import React from "react";


function SearchInput(props){

    return(

            <form className="col s12 m8 l6">
            <label id="labelAdd" className="active" for="ingredients">I have this ingredient what can I cook?</label>
            <input id="ingredients" type="text" className="validate childflexInput" required     
                onChange={props.onChange}
                value={props.value}
                name="search" 
                type="text" 
                className="validate center-align"
                id="searchinput"

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
            </form>


    );

   }   

export default SearchInput;
