import React from 'react';
import Logo from "../Logo";
// import Card from "../Card";
import SearchInput from "../SearchInput";
// import ResultsContainer from "../ResultsContainer"
// import SearchButton from '../SearchButton';
// import Chips from "../Chips"
// import API from "../../utils/API.js";


        
class Search extends React.Component{


    render () {
      return (

             <div className="container">
                 <div className="row">
                        <div className="logodiv col s12 m4">
                            <Logo />
                         </div>
                 </div>
                  <div className="row formContainer">
                  <div className="input-field col m8 l6 offset-m2 offset-l3">
            
                    <SearchInput
                            
                    /> 

        
                    </div>
                    {/* <Chips /> */}
                      </div>
                    <div>
                    </div>
            
                    <div className="row">
                        {/* <ResultsContainer /> */}
                        

                    </div>



                
    
             </div>

  
     )
    
    };
};

    export default Search;
