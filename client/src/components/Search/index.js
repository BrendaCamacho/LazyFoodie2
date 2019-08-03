import React, { Component } from 'react';
import Logo from "../Logo";
import Card from "../Card";





class Search extends Component{
        
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         query: '',
    //         items: [],
    //         lastQuery: ''
    //     };
    // }
    // search(){
    //     var key =   "d700cd0ee0b7bf70739c9bd846d3080d"	;	
    //     const BASE_URL = "https://api.edamam.com/search?q=" +
    //     query + "&to=12&app_id=" +  "f1e5b0de" + "&app_key=" + key;
    //     console.log(base_UR)
    //     fetch(`${BASE_URL}${this.state.query}`, {method: 'GET'})
    //     .then(response => response.json())
    //     .then(json => {
    //         let {items} = json;
    //         this.setState({items});
    //         this.setState({lastQuery : this.state.query });
    //         console.log(json);
    //     });
    // }
 
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
                     <form className="col s12 m8 l6">
                            <label id="labelAdd" className="active" for="ingredients">I have this ingredient what can I cook?
                            </label>
                            <input id="ingredients" type="text" className="validate childflexInput" required     
                            // onChange = { event => this.setState({query: event.target.value})} 
                            // onKeyPress = { event => {
                            // if(event.key == "Enter"){
                            //     this.search();
                            // }
                            //  }}
                              >    

                         
                               
                            </input>
                     
                            <button id="addIngredients" className="btn waves-effect waves-light childFlexSearch" type="submit"
                                name="action">Add<i className="material-icons right">add</i>
                            </button>
                    
                            </form>
                         
                </div>
                </div>
                     <div className="row chipsRow col m8 l6">
                          <div className="chip" data-name="milk">milk<i className="close material-icons">close</i></div>
                    </div> 
                    <div className="row">
                        <Card />

                    </div>



                
    
   </div>

  
        )
    
    };
};

    export default Search;
