import React from "react";


function SearchInput(props){

    return(

        <div className="input-field col m8 l6 offset-m2 offset-l3">


            <input id="ingredients" type="text" className="childflexInput" required   
                onChange={props.onChange}
                value={props.value}
                name="search" 
                type="text" 
                className="validate center-align"
                id="ingredients"

            />
            <label id="labelAdd" className="active" className="ingredients" for="ingredients">I have this ingredient what can I cook?</label>



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
