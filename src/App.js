import React from 'react';
import ListView from './pages/ListView';
import SalonView from './pages/SalonView';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <ListView />
            </Route>
            <Route path="/salon/:id">
              <SalonView />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
