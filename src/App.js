import { Route, Switch } from 'react-router-dom';
import './App.css';
import AboutUsHero from './components/AboutUsHero/AboutUsHero';



function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={AboutUsHero}/>
      </Switch>
    </div>
  );
}

export default App;
