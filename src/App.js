import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import {routes} from './config/routes';
import "./styles/root.scss"

function App() {
  return (
    <div className="App">
      <Router>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              component={route.component}
            />
          ))}
      </Router>
    </div>
  );
}

export default App;
