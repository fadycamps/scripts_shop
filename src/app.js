import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Browse, SignIn, SignUp } from './pages';
import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';

export function App() {
  return (
    <Router>
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/browse" exact>
                <Browse />
            </Route>
        </Switch>
    </Router>
  );
}
