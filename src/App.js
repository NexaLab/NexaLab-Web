import { Route, Switch } from 'react-router-dom';
import './App.css';
import OurServicesHero from './components/OurServicesHero/OurServicesHero';




function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={OurServicesHero}/>
      </Switch>
    </div>
  );
}

export default App;
