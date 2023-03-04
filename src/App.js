import { Route, Switch } from 'react-router-dom';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import Test from './components/Test/Test';





function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ContactForm}/>
      </Switch>
    </div>
  );
}

export default App;
