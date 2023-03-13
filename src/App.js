import { Route, Switch } from 'react-router-dom';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import Test from './components/Test/Test';
import AboutusServices from './components/Aboutus-Services/AboutusServices';
import AboutUsHero from './components/AboutUsHero/AboutUsHero';
import AboutUsCommitSucceed from './components/AboutUsCommitSucceed/AboutUsCommitSucceed';
import Hero from '././components/Hero/Hero';
import ContactLocation from './components/ContactLocation/ContactLocation';
import Home from './pages/Home';
import ContactHero from './components/ContactHero/ContactHero';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import OurServices from './pages/OurServices';







function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/services" component={OurServices}/>
      </Switch>
    </div>
  );
}

export default App;
