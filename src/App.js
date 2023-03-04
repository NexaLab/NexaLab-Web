import { Route, Switch } from 'react-router-dom';
import './App.css';
import Test from './components/Test/Test';
import AboutusServices from './components/Aboutus-Services/AboutusServices';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={AboutusServices} />
      </Switch>
    </div>
  );
}

export default App;
