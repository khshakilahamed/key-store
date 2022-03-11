import './App.css';
import Home from './pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import KeyboardCollections from './pages/KeyboardCollections/KeyboardCollections/KeyboardCollections';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Login from './pages/Login-Signup/Login/Login';
import SignUp from './pages/Login-Signup/SignUp/SignUp';
import OrderPlaced from './pages/OrderPlaced/OrderPlaced';
import KeyboardDetails from './pages/KeyboardDetails/KeyboardDetails';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <AuthProvider>
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
          <Route path='/orderPlaced/:id'>
            <OrderPlaced></OrderPlaced>
          </Route>
          <Route path='/keyboardDetails/:id'>
            <KeyboardDetails></KeyboardDetails>
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
    </AuthProvider>
  );
}

export default App;
