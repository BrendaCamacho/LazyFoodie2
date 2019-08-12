import React, {Component} from 'react';


class NoResults extends Component {
    render() {
        return(

            
                <div className="no-results">
                    <p>Sorry, no results available for this query. Try again</p>
                    <i className="material-icons sad-face">sentiment_very_dissatisfied</i>
                </div>
            )
    }

}
    export default NoResults;