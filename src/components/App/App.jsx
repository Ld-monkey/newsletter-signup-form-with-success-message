import { Route, Switch } from 'wouter';
import { useHashLocation } from 'wouter/use-hash-location';
import SubscribePage from '../../pages/Subscribe/SubscribePage';
import SuccessPage from '../../pages/Success/SuccessPage';

function App() {
  return (
    <Switch>
      <Route hook={useHashLocation}>
        <Route path={import.meta.env.BASE_URL} component={SubscribePage} />
        <Route path="/success" component={SuccessPage} />
      </Route>
    </Switch>
  );
}

export default App;
