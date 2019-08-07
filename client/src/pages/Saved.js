import React, { Component } from "react";
import Saved from "../components/Saved";
import ResultsContainer from "../components/ResultsContainer";

class Saved extends Component {
    constructor(props) {
        super(props);
        this.state = {
            savedRecipes: []
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                <ResultsContainer savedRecipes = {this.savedRecipes} path = {this.props.match.path}/>
                </div>
            </div>
        )
    }
}

export default SavedPage;