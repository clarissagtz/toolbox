import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
//push changes part 1 

const Ctemp = () => {
    const history = useHistory();
    return (
        <div>
            <h2> Clarissa's page for now  </h2>

            <Button variant="btn btn-success" className="mainButton" onClick={()=> history.push("/")}>Go to index </Button>
        </div>
    );
}
export default Ctemp;


// //second option, same thing:

// import React, { Component } from "react";
// export default class Creates extends Component {
//     render() {
//       return (
//         <div>Option 2 different </div>
//       );
//     }
//   }