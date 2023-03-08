import { Route, Switch } from 'react-router-dom';
import './App.css';
import OurServiceSecondSection from './components/OurServiceSecondSection/OurServiceSecondSection';




function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={OurServiceSecondSection}/>
      </Switch>
    </div>
  );
}

export default App;
