import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes } from './utils/routes';
import './App.scss';

function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            exact
            path={route.path}
            component={route.component}
          />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
