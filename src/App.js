import { Route, Switch } from 'react-router-dom';
import './App.css';
import Test from './components/Test/Test';
import AboutusServices from './components/Aboutus-Services/AboutusServices';
import AboutUsHero from './components/AboutUsHero/AboutUsHero';
import AboutUsCommitSucceed from './components/AboutUsCommitSucceed/AboutUsCommitSucceed';
import Hero from '././components/Hero/Hero';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';






function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/about" component={AboutUs}/>
        <Route exact path="/" component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
