import { Route, Switch } from 'react-router-dom';
import './App.css';
import ContactLocation from './components/ContactLocation/ContactLocation';
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
