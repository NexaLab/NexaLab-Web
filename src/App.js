import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Test from './components/Test/Test';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Navbar}/>
      </Switch>
    </div>
  );
}

export default App;
