
import React, {Component} from 'react';


class Chips extends Component {
   
    render() {
        return(

            <div className="row chipsRow col m8 l6">
                {this.props.chipsName.map((searchChip) => {


                            return(
                            <div className="chip" data-name={searchChip}>
                            {searchChip}

                            <i className="close material-icons" data-name={searchChip} onClick= {this.props.onClick}>close  </i> 
                            </div>
               
<<<<<<< HEAD
                )})
                }
=======
         )})


    }

         </div>
                


        
>>>>>>> d462ab23082ea89b9f3794fbf22842aa20fe57af

            </div>
        )

   }
}

    export default Chips;