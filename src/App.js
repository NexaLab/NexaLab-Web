import { Route, Switch } from 'react-router-dom';
import './App.css';
import Test from './components/Test/Test';
import Testimonials from './components/Testimonials/Testimonials';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Testimonials}/>
      </Switch>
    </div>
  );
}

export default App;
