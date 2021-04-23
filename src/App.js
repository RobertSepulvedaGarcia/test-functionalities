import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes } from './utils/routes';

function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route) => (
          <Route exact path={route.path} component={route.component} />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
