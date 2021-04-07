import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from '../pages/Home';
import UserDebts from '../pages/UserDebts';
import Details from '../pages/Details';
import NewDebt from '../pages/NewDebt';
import MissingRoute from '../pages/MissingRoute';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact childComponent={Home} />
      <Route path="/user/:id" exact childComponent={UserDebts} />
      <Route path="/details/:id" exact childComponent={Details} />
      <Route path="/new/:id" exact childComponent={NewDebt} />
      <Route path="*" childComponent={MissingRoute} noMatch />
    </Switch>
  );
};

export default Routes;
