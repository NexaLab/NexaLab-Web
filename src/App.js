import { Route, Switch } from 'react-router-dom';
import ConnectUs from './components/ConnectUs/ConnectUs';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ConnectUs}/>
      </Switch>
    </div>
  );
}

export default App;
