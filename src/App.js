import './App.css';
import Home from './pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import KeyboardCollections from './pages/KeyboardCollections/KeyboardCollections/KeyboardCollections';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Login from './pages/Login-Signup/Login/Login';
import SignUp from './pages/Login-Signup/SignUp/SignUp';

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
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/signup'>
            <SignUp></SignUp>
          </Route>
          <Route path='*'>
            <PageNotFound></PageNotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
