import { Route, Switch } from 'react-router-dom';
import './App.css';
import AboutUsCommitSucceed from './components/AboutUsCommitSucceed/AboutUsCommitSucceed';




function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={AboutUsCommitSucceed}/>
      </Switch>
    </div>
  );
}

export default App;
