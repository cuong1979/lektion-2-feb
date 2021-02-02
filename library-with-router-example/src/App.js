import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Books from './components/Books';

/**
 * Ny arkitektur med React Router
 * App.js - Router med Switch som håller koll på våra routes
 * Books.js - Route med path="/". Loopar ut alla böcker från childrensbooks.json
 * Book.js - Visar en upp bok som loopas ut från Books.js
 * BookInfo.js - Route med path="/info". Visar detaljerad information om vald bok
 */

/**
 * Problem att lösa
 * Hur får vi den valda boken från Book.js till BookInfo.js
 */

function App() {

  return (
    <Switch>
      <Route path="/" component={ Books } />
    </Switch>
  );
}

export default App;
