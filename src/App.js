import { Route, Switch } from 'react-router-dom';
import './App.css';
import OurTeam from './components/Our Team/OurTeam';



function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={OurTeam}/>
      </Switch>
    </div>
  );
}

export default App;
