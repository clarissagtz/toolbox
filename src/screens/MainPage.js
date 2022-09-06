import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const MainPage = () => {
    const history = useHistory();
    return (
        <div>
            <h2>This will be the main page, the others page will be deleted  </h2>
            <div>
            <Button 
            onClick={()=> history.push("/")}>Go back to index</Button>
                
            </div>
        </div>
    );
}
export default MainPage;