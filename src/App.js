import React from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from './Pages/Home';
import LandingMovie from './Pages/LandingMovie';


const App = () => {

  return (
    <div className="container">
      <BrowserRouter>
          <Switch>
            <Route exact path='/landing/:_id' component={LandingMovie}></Route>  
            <Route exact path='/' component={Home}></Route>
          </Switch>
      </BrowserRouter> 
    </div> 

  )
}

export default App
