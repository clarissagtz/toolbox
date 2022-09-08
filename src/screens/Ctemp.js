import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
//need to install react bootstrap to this file do: 
// import Card from 'react-bootstrap/Card';


const Ctemp = () => {
    const history = useHistory();
    return (
        <div>
            <h2> Clarissa's page for now  </h2>
            <h5>clarissaa</h5>

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