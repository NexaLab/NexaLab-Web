import { Route, Switch } from 'react-router-dom';
import './App.css';
import Test from './components/Test/Test';
import Testimonials from './components/Testimonials/Testimonials';
import TechWeUsed from './components/TechWeUsed/TechWeUsed';
import OurServicesHero from './components/OurServicesHero/OurServicesHero';
import Hero from '././components/Hero/Hero';
import Home from './pages/Home';







function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
