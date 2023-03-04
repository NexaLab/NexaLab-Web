import { Route, Switch } from 'react-router-dom';
import './App.css';
import ThirdSection from './components/ThirdSection/ThirdSection';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ThirdSection}/>
      </Switch>
    </div>
  );
}

export default App;
