import './App.css';
import Home from './pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import KeyboardCollections from './pages/KeyboardCollections/KeyboardCollections/KeyboardCollections';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/explore_keyboards'>
            <KeyboardCollections></KeyboardCollections>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
