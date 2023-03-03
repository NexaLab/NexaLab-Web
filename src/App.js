import { Route, Switch } from 'react-router-dom';
import './App.css';
import ourServicesSection from './components/ourServicesSection/ourServicesSection';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ourServicesSection}/>
      </Switch>
    </div>
  );
}

export default App;
