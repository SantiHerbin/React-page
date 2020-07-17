import React from 'react';
import './App.css';

import Navegacion from './components/navegacion';
import Inicio from './components/inicio';
import Portafolio from './components/portafolio';
import Contacto from './components/contacto';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
      <Router>
          <Navegacion />  
          <Switch>
            <Route path="/portafolio">
              <Portafolio />
            </Route>
            <Route path="/contacto">
              <Contacto />
            </Route>
            <Route path="/">
              <Inicio />
            </Route>
          </Switch>
      </Router>
  );
}

export default App;
