import { Route, Switch } from 'react-router-dom';
import './App.css';
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
