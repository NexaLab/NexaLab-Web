import { Route, Switch } from 'react-router-dom';
import './App.css';
<<<<<<< HEAD
import ThirdSection from './components/ThirdSection/ThirdSection';
=======
import Hero from '././components/Hero/Hero';
import Home from './pages/Home';



>>>>>>> about-us-page

function App() {
  return (
    <div className="App">
      <Switch>
<<<<<<< HEAD
        <Route exact path="/" component={ThirdSection}/>
=======
        <Route exact path="/" component={Home}/>
>>>>>>> about-us-page
      </Switch>
    </div>
  );
}

export default App;
