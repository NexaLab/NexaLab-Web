import { Route, Switch } from 'react-router-dom';
import './App.css';
import FooterNexalab from './components/Footer/FooterNexalab';
import Footer1 from './components/Footer/Footer1';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={FooterNexalab} />
      </Switch>
    </div>
  );
}

export default App;
