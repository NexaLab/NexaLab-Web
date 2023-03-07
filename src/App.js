import { Route, Switch } from 'react-router-dom';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import Hero from '././components/Hero/Hero';
import ContactLocation from './components/ContactLocation/ContactLocation';
import Home from './pages/Home';
import ContactHero from './components/ContactHero/ContactHero';
import Contact from './pages/Contact';











function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/contact" component={Contact}/>
      </Switch>
    </div>
  );
}

export default App;
