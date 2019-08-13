import React from 'react';
import './App.css';
import {Shoes} from './components/pages/Shoes';
import {Leotards} from './components/pages/Leotards';
import {Costumes} from './components/pages/Costumes';
import {ButtonBar} from './components/navigation/ButtonBar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {ItemViewComponent} from './components/ItemViewComponent';

const App = () => {
  return(
    <div>
      <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
      />
      <Router>
        <div className="App">
          <ButtonBar/>
          <Route exact path="/shoes/" component={Shoes}/>
          <Route exact path="/leotards/" component={Leotards}/>
          <Route exact path="/costumes/" component={Costumes}/>
          <Route exact path="/:product/:id" component={ItemViewComponent}/>
        </div>
      </Router>
    </div>
  )
}

export default App;