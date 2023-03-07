import { Route, Switch } from 'react-router-dom';
import './App.css';
import Hero from '././components/Hero/Hero';
import Home from './pages/Home';
import ContactHero from './components/ContactHero/ContactHero';




function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ContactHero}/>
      </Switch>
    </div>
  );
}

export default App;
