import NewsTicker from './components/ticker';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
     <Switch>
     <Route exact path="/">
       <NewsTicker />
     </Route>
     <Route path="/about">
       <About />
     </Route>
   </Switch>
 </div>
</Router>
  );
}

function About() {
  return (
    <div>
      <h2>About MoB</h2>
    </div>
  );
}

export default App;