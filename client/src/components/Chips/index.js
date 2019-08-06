
import React from 'react';
import SearchInput from "../SearchInput"
import SearchButton from "../SearchButton"


class Chips extends React.Component {

render() {
    if  (SearchButton.searchClick === true){
      if(SearchInput.value.lenght > 0){
            return(
            <h1>HOLA</h1>
            )

        }
    }
}


        // return(

        //     // <div className="chip" data-name={this.props.SearchInput}>

        //         <h1>HOLA</h1>
        //         /* </div>i className="close material-icons" >close< /i> */
        //     // </div>
        // )
    



}

    

    export default Chips;
    