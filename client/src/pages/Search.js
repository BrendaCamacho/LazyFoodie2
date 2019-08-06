import React, { Component } from "react";
// import Search from "../components/Search";
import SearchInput from "../components/SearchInput"
import API from "../utils/API.js";
import Chips from "../components/Chips"
import Logo from "../components/Logo"
import ResultsContainer from "../components/ResultsContainer"



class SearchPage extends Component {
    
    componentDidUpdate(){
    console.log("This chips", this.state.searchChip, "Join", this.state.searchQuery);
    console.log("results", this.state.results)
    

    }

    state = {
        results:[],
        search: "",
        searchQuery:"",
        searchChip: [],
    };
  
    
    onChange = e =>{
        const value = e.target.value;
        const name= e.target.name;
        this.setState({
            [name]:value
        });
        console.log(this.state.search);

    }

    search = () => {
        API.search(this.state.searchQuery)
        .then(response => {this.setState({results:response.data.hits})})
        .catch(err=> console.log(err));
    }


    searchClick = e =>{
        e.preventDefault();


        this.setState(state => {
            const searchChip2 = this.state.searchChip.concat(state.search);

            return{
                searchChip:searchChip2,
                searchQuery:searchChip2.join("-"),
                search: ""
            };


        },  this.search ) 

        
    };

 
    render() {
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
            value={this.state.search}
            onChange={this.onChange} 
            onClick={this.searchClick}/>
                
            </div>
            </div>


            
                    <Chips
                    chipsName = {this.state.searchChip}
                     />
            
              <div className="row">

                    <ResultsContainer
                    recipesData = {this.state.results}/>
             </div>

            </div>
            


            
        )
    }
}

export default SearchPage;