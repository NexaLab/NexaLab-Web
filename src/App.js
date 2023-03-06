import { Route, Switch } from 'react-router-dom';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import Test from './components/Test/Test';
import Hero from '././components/Hero/Hero';
import Home from './pages/Home';








function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ContactForm}/>
        <Route exact path="/home" component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
