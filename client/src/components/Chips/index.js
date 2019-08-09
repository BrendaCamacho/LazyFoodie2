
import React, {Component} from 'react';


class Chips extends Component {
   


    render() {
        return(

            <div className="row chipsRow col m8 l6">

        {this.props.chipsName.map((searchChip) => {
            return(
                <div className="chip" data-name={searchChip}>
                {searchChip}

                <i className="close material-icons"    
                 data-name={searchChip} onClick= {this.props.onClick}>
                close  </i> 

    
                </div>

                
                
               
         )})


    }

         </div>
                


        

        )
    }
}

    

    export default Chips;