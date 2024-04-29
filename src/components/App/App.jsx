import { Route, Switch } from 'wouter';
import SubscribePage from '../../pages/Subscribe/SubscribePage';
import SuccessPage from '../../pages/Success/SuccessPage';

function App() {
  return (
    <Switch>
      <Route>
        <Route path={import.meta.env.BASE_URL} component={SubscribePage} />
        <Route path="/success" component={SuccessPage} />
      </Route>
    </Switch>
  );
}

export default App;
