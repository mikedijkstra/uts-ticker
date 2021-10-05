import NewsTicker from './components/ticker/ticker';
import About from './components/info/info'
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

export default App;