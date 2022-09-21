import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Content from '../components/Content/Content'
const Dtemp = () => {
    const history = useHistory();
    return (
        <div>
            <header>
                <Header />
            </header>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Content />
            <h2> Daixi's page for now  </h2>
            <Button variant="btn primary" className="mainButton" onClick={() => history.push("/")}>Go to index </Button>
            <div className='footer-container' style={{position:'relative'}}>
            <Footer />
            </div>
        </div>
    );
}
export default Dtemp;