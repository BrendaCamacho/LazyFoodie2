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
            recipes: []
         }

         this.saveClick = this.saveClick.bind(this);
         this.deleteClick = this.deleteClick.bind(this);
    }   


     saveClick = function(e){
        this.setState({saved:true});
        const recipesData = {
            img: this.props.img,
            title: this.props.title,
            timer: this.props.timer,
            calories: this.props.calories,
            yields: this.props.yields,
            link: this.props.link,
            description: this.props.description
        }
        e.preventDefault();
        API.saveRecipe(recipesData)
        .then(
            (response) => {
                console.log(response)
            }
        ).catch(
            (err) => {
                console.log(err);
            }
        );
    };
    deleteClick = function(e){
        this.setState({deleted: true});
        e.preventDefault();
        API.deleteRecipes(this.props.id)
        .then(
            (response) =>  {
                console.log(response);
                window.location.reload();

            //function to reaload if not it's still there
            
            }
        ).catch(
            (err) => {
                console.log(err);
            }
        );
    };
    render () {
        return  (
            <div className="recipesContainer col s12">
                <div className="cardContainer col s12 m6 l4 xl3">
                    <div className="card sticky-action col s12">
                        <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator" src="{this.props.img}"></img>
                        </div>
                    <div className="card-content">
                        <div className="cardTitle">
                            <div className="card-title activator truncate flexTitle">{this.props.title}</div>
                            <div className = "card-title activator">
                                <i className= "material-icons small right">add_circle</i>
                            </div>

                        </div>
                        <div className="cardText">
                            <p>
                            {this.props.timer}
                            <i className="material-icons left">timer</i>
                            </p>
                        </div>
                        <div className="cardText">
                            <p>
                            {this.props.calories}
                            <i className="material-icons left">mood</i>
                            </p>
                        </div>
                        </div>

                    <div className="card-reveal" >
                        <div className="card-title flexTitle truncate">
                        {this.props.title}
                        </div>
                        <div className="card-title">
                            <i className="material-icons small right">close</i>
                        </div>
                        <p className="yields">{this.props.yields}</p>
                        
                        <ul>
                            {this.props.description}
                            {/* <li>2 1/2 cups grappa or unflavored vodka</li>
                            <li>2 cups whole milk</li>
                            <li>2 cups sugar</li>
                            <li>2 ounces bittersweet chocolate (preferably 70%), grated</li>
                            <li>1/2 lemon, seeded and chopped, with rind</li> */}
                        </ul>
                        <a className="waves-effect waves-light btn-small" href="{this.props.link}" target="_blank">Full Recipe<i className="material-icons right">add</i></a>
                        {
                                // if this.props.path is "/" display save button else display Delete button
                                (this.props.path === "/saved")? 
                                <button type="button"className="btn waves-effect waves-light danger"  name="Delete" disabled={this.state.deleted} onClick={this.deleteClick}>Delete</button>
                                :
                                <button className="btn waves-effect waves-light" type="button" name="save" disabled={this.state.saved} onClick={this.saveClick}> Save</button> 
                            }

                    </div>
                    </div>


                    </div>
                </div>
        
            
        
    
        
        
        
        
    );
                   
}
}




export default Card;