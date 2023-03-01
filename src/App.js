import { Route, Switch } from 'react-router-dom';
import './App.css';
import Test from './components/Test/Test';
import aboutUs from './components/aboutUs/aboutUs';
import aboutUsSection from './components/aboutUsSection/aboutUsSection';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Test}/>
      </Switch>
      <Switch>
        <Route exact path="/aboutUs" component={aboutUs}/>
      </Switch>
      <Switch>
        <Route exact path="/aboutUsSection" component={aboutUsSection}/>
      </Switch>
    </div>
  );
}

export default App;
