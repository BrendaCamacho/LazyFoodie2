import React from "react";
import ResultsContainer from "../components/ResultsContainer";
import API from "../utils/API";
import Logo from "../components/Logo";

class Saved extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            savedRecipes: [],
            deletedRecipe: [],
            loggedIn: false
        }
        this.handleStateChange = this.handleStateChange.bind(this);
    }

    componentWillMount(){
        if(localStorage.getItem("usertoken")){
            this.setState({loggedIn:true});
        }
        API.getRecipes().then(
            (response) => {
                this.setState({savedRecipes:response.data})
                console.log(response);
            }
        ).catch(
            (err) => {
                console.log(err);
            }
        );
    }

    handleStateChange(value){
        let savedRecipes = this.state.savedRecipes;
        const filteredArray = savedRecipes.filter((el)=>{
            return el._id != value
        })
        this.setState({savedRecipes:filteredArray});
    }

    render() {
        console.log(this.state.savedRecipes)
        return (
     
            
            <div className="container">
            <div className = "row">
                <div className = "logodiv col s12 m4">
                    <Logo/>
                </div>
            </div>
            {
                (this.state.loggedIn) ? 
                <div className="row">
                <ResultsContainer handleStateChange = {this.handleStateChange} savedRecipes = {this.state.savedRecipes} path = {this.props.match.path}/>
                </div>:""} 
            </div> 
        )
    }
}

export default Saved;