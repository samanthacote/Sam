import React from 'react';
import './App.css';
import {Shoes} from './components/pages/Shoes';
import {Leotards} from './components/pages/Leotards';
import {Costumes} from './components/pages/Costumes';
import {ButtonBar} from './components/navigation/ButtonBar';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const App = () => {
  return(
    <Router>
      <div className="App">
        <ButtonBar/>

        <Route path="/shoes/" component={Shoes}/>
        <Route path="/leotards/" component={Leotards}/>
        <Route path="/costumes/" component={Costumes}/>

      </div>
    </Router>
  )
}

export default App;