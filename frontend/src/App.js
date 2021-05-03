
import Home from './pages/Home'
import Cities from './pages/Cities'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import Header from './components/Header'
import Footer from './components/Footer'
import CityContent from './components/CityContent'
import {BrowserRouter , Route, Switch, Redirect} from 'react-router-dom'
import '../src/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/cities" component={Cities}/>
            <Route path="/city/:id" component={CityContent}/>
            <Route path="/sign-up" component={SignUp}/>
            <Route path="/log-in" component={LogIn}/>
            <Redirect to="/" />
        </Switch>
        <Footer/>
      </BrowserRouter>
   </>
  );
}

export default App;
