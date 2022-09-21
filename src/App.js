import logo from './logo.svg';
import './App.css';


//I import 
//npm install @mui/material @mui/styled-engine-sc styled-components
//import LinkCards from './components/LinkCards'
// import pc from './reddit-alien-red.webp'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './screens/MainPage';
import Ctemp from './screens/Ctemp';
import Dtemp from './screens/Dtemp';
import Home from './screens/Home';
import About from './screens/About';
import Contact from './screens/Contact';
import Credits from './screens/Credits';
import Share from './screens/Share'
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* <Route exact path = "/"></Route> */}

          <Route path="/" exact component={Home} />
          <Route path="/MainPage" component={MainPage} />
          <Route path="/Dtemp" component={Dtemp} />
          <Route path="/Ctemp" component={Ctemp} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Credits" component={Credits} />
          <Route path="/Share" component={Share} />
        </Switch>

        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Practice</p> */}

      </div>
    </Router>
  );
}

export default App;
