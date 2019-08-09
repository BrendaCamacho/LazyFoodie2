import React from "react";
import API from "../../utils/API"
// import { Link } from "react-router-dom";

require("../..//App.css")



class Card extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            saved: false,
            deleted:false,
            results: []
         }

         this.saveClick = this.saveClick.bind(this);
         this.deleteClick = this.deleteClick.bind(this);
    }   


     saveClick = function(e){
        this.setState({saved:true});
        const recipesData = {
            image: this.props.image,
            label: this.props.label,
            totalTime: this.props.totalTime,
            calories: this.props.calories,
            yield: this.props.yield,
            url: this.props.url,
            ingredientsLines: this.props.ingredientLines
        }
        e.preventDefault();
        API.saveRecipe(recipesData)
        .then(
            (response) => {
                console.log(response)
                console.log("SAVING" + recipesData.ingredientLines);
            }
        ).catch(
            (err) => {
                console.log(err);
            }
        );
    };
    deleteClick = function(e){
        this.setState({deleted: true});
        API.deleteRecipe(this.props.id)
        .then(
            (response) =>  {
                console.log(response);
                this.props.handleStateChange(this.props.id)
            }
        ).catch(
            (err) => {
                console.log(err);
            }
        );
    };
    render () {
        return  (
                <div className="cardContainer col s12 m6 l4 xl3">
                    <div className="card sticky-action col s12">
                        <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator" src={this.props.image}></img>
                        </div>
                    <div className="card-content">
                        <div className="cardTitle">
                            <div className="card-title activator truncate flexTitle">{this.props.label}</div>
                            <div className = "card-title activator">
                                <i className= "material-icons small right">add_circle</i>
                            </div>

                        </div>
                        <div className="cardText">
                            <p>
                            {this.props.totalTime}
                            <i className="material-icons left">timer</i>
                            </p>
                        </div>
                        <div className="cardText">
                            <p>
                            {this.props.calories.toFixed()}
                            <i className="material-icons left">mood</i>
                            </p>
                        </div>
                        </div>

                    <div className="card-reveal" >
                        <div className="card-title flexTitle truncate">
                        {this.props.label}
                        </div>
                        <div className="card-title">

                        <i className="material-icons small right">close</i>

                        </div>
                        <p className="yields"> Servings {this.props.yield} </p>
       
                        <ul>

                            {this.props.ingredientLines.map((i) => {
                                return (

                                <li> {i} </li>
                                )})
                           }

                        </ul>
                         
                        
                        <a className="waves-effect waves-light btn-small" href={this.props.url} target="_blank">Full Recipe<i className="material-icons right">add</i></a>

                        {
                                // if this.props.path is "/" display save button else display Delete button
                                (this.props.path === "/")? 
                                <button className="btn waves-effect waves-light" type="button" name="save" onClick={this.saveClick} disabled={this.state.saved}>{(this.state.saved) ? "Saved" :"Save"}</button> 
                                :
                                <button type="button"className="btn waves-effect waves-light deleteButton"  name="Delete" disabled={this.state.deleted} onClick={this.deleteClick}>Delete</button>
                                
                        }

                    </div>
                    </div>


                    </div>
        
            
        
    
        
        
        
        
    );
                   
}
}




export default Card;




