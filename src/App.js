
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from "./Pages/Home";
import LandingMovie from './Pages/LandingMovie';


function App() {

  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path='/'>
            <Home/>
          </Route>
          <Route  path='/landing'>
            <LandingMovie/>
          </Route>  
        </Switch>
      </Router>
    </div>
  );
}


export default App;
