import { Button } from 'react-bootstrap';

import { useHistory } from 'react-router-dom';

const Home = () => {
    const history = useHistory();
    return (
        <div>
            <h2>This is the temporal Index</h2>
            <div>
            <Button  variant="btn primary" className="mainButton" onClick={()=> history.push("/Ctemp")}>Clarissa</Button>
            <Button  variant="btn primary" className="mainButton" onClick={()=> history.push("/Dtemp")}>Daixi</Button>
            <Button  variant="btn primary" className="mainButton" onClick={()=> history.push("/MainPage")}>MainPage </Button>
            
            </div>
        </div>
    );
}
export default Home;