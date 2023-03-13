import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import OurServices from './pages/OurServices';







function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/services" component={OurServices}/>
      </Switch>
    </div>
  );
}

export default App;
