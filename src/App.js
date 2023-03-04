import { Route, Switch } from 'react-router-dom';
import './App.css';
<<<<<<< HEAD
import Home from './pages/Home';


=======
import FooterNexalab from './components/Footer/FooterNexalab';
>>>>>>> 6e0dffe4a560572e6922df4bc6b29641fc1885d3

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
