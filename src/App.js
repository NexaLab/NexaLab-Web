import { Route, Switch } from 'react-router-dom';
import './App.css';
import OurService from './components/Our Service/OurService';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={OurService}/>
      </Switch>
    </div>
  );
}

export default App;
