import Loader from "react-loader-spinner"
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

import userActions from './redux/actions/userActions'
import { connect } from 'react-redux'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App(props) {
  console.log("props app", props)
  if(!props.loggedUser && localStorage.getItem('token')){
  const usuarioALog = props.loginForzado(localStorage.getItem('token'))
    if(!props.loggedUser){
      return (
        <div className="contenedorLoadApp">
          <Loader
              type="Puff"
              color="#00BFFF"
              height={400}
              width={400}
              timeout={3000} //3 secs
          />
        </div>
      )
    }
  }
  return (
    <>
      <ToastContainer/>
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

const mapStateToProps = state =>{
  return{
    loggedUser: state.UserRedux.loggedUser
  }
}

const mapDispatchToProps = {
  loginForzado: userActions.loguearUsuarioLS,
  loguearUsuario: userActions.loguearUsuario
}
export default connect(mapStateToProps , mapDispatchToProps) (App);
