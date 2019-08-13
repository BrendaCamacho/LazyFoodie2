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
    //console.log("newdeletedarray", this.state.deleteChip, "Join" , this.state.searchQuery)

    }

    state = {
        results:[],
        search: "",
        searchQuery:"",
        deleteChip: "",
        searchChip: [],
        searched: "",
    };
  
    
    onChange = e =>{
        const value = e.target.value;
        const name= e.target.name;
        this.setState({
            [name]:value
        });
        console.log("onChange", this.state.search);

    }


    search = () => {

        console.log("search")
        console.log(this.state.searchQuery)
        API.search(this.state.searchQuery)
        .then(response => {this.setState({results:response.data.hits})})
        .catch(err=> console.log(err));
    }


    searchClick = e =>{
     
        
        e.preventDefault();
        console.log("searchClick")
        console.log(this.state)

        if(this.state.search.length === 0)
            return 

        this.setState(state => {
            const searchChip2 = this.state.searchChip.concat(state.search)
            console.log(searchChip2)
            return{
                searchChip:searchChip2,
                searchQuery:searchChip2.join("-"),
                search: "",
                searched: true
            }
        },  this.search ) 
        
    };
    


    deleteClick = e =>{
        e.preventDefault ();
        //console.log("searchQuery antes de setState", this.state.searchQuery)
        //console.log(this.state.searchChip.filter(x => x !== e.target.getAttribute("data-name")))
        //console.log("target", e.target.getAttribute("data-name"))
        console.log("deleteClick")
        console.log(this.state)

        // if (this.state.search.length === 0) {
        //     return(this.state.searched === false)
            
        // } 
        const deletedChip = e.target.getAttribute("data-name")
        console.log("esto queremos borrar", deletedChip)
        this.setState ( state => {
            // searchChip:deleteChip,

         
            console.log('data-target:', deletedChip)
            console.log('state', state)
            const deleteChip = state.searchChip.filter( x => x !== deletedChip)
            console.log("deleteChip: ", deleteChip)
            const deleteChipJoin = deleteChip.join("-")
            console.log("deleteChipJoin", deleteChipJoin)
            
            return  {  
                searchQuery: deleteChipJoin,
                searchChip: deleteChip
            }
            // searchQuery: deleteChip.join("-").split(), 
            // search: "",
            //this.state.searchChip.filter( (_ , i) => i === 0),
            }, 
            this.search )

    };

 
    render() {
        return (
            <div className="container">
            <div className="row">
                   <div className="logo col s12 m4">
                       <Logo />
            </div>
            </div>
             <div className="row formContainer">
             <form className="col s12 m8 l6">

            <SearchInput 
            value={this.state.search}
            onChange={this.onChange} 
            onClick={this.searchClick}/>
                
            </form>
            </div>


            
                    <Chips
                    chipsName = {this.state.searchChip}
                    onClick = {this.deleteClick}
                     />
            
              <div className="row">

                    <ResultsContainer
                    recipesData = {this.state.results} path={this.props.match.path} searched = {this.state.searched}/>
                    
             </div>
             </div>


            


            
        )
    }
}

export default SearchPage;