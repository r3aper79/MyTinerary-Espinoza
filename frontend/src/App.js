
import Home from './pages/Home'
import Cities_ from './pages/Cities'
import LogIn_ from './pages/LogIn'
import SignUp_ from './pages/SignUp'
import {BrowserRouter , Route, Switch} from 'react-router-dom'
import '../src/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/cities" component={Cities_}/>
            <Route path="/sign-up" component={LogIn_}/>
            <Route path="/log-in" component={SignUp_}/>
        </Switch>
      </BrowserRouter>
   </>
  );
}

export default App;
