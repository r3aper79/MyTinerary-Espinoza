
import Home from './pages/Home'
import Cities_ from './pages/Cities'
//import LogIn_ from './pages/LogIn'
//import SignUp_ from './pages/SignUp'
import {BrowserRouter , Route, Switch} from 'react-router-dom'
import '../src/styles.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/cities" component={Cities_}/>
        </Switch>
      </BrowserRouter>
    

   </>
  );
}

export default App;
