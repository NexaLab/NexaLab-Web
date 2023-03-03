import { Route, Switch } from 'react-router-dom';
import './App.css';
import TechWeUsed from './components/TechWeUsed/TechWeUsed';




function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={TechWeUsed}/>
      </Switch>
    </div>
  );
}

export default App;
