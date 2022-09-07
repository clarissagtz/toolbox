import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';


const Dtemp = () => {
    const history = useHistory();
    return (
        <div>
            <h2> Daixi's page for now  </h2>
            <Button variant="btn primary" className="mainButton"  onClick={()=> history.push("/")}>Go to index </Button>
        </div>
    );
}
export default Dtemp;