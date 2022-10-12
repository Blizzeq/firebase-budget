import './App.scss';
import {HashRouter, Route, Routes} from "react-router-dom";
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBBtn
} from 'mdb-react-ui-kit';
import HomePage from "./Components/HomePage";
import {LinkContainer} from "react-router-bootstrap";
import LoginScreen from "./Components/LoginScreen";
import RegisterScreen from "./Components/RegisterScreen";
import {auth, db} from "./firebase-config";


function App() {
  return (
      <HashRouter>
          <MDBNavbar dark bgColor='dark'>
              <MDBContainer>
                  <LinkContainer to="/">
                  <MDBNavbarBrand>Budget App</MDBNavbarBrand>
                    </LinkContainer>
                    <LinkContainer to="/login">
                  <MDBBtn color='light'>Login</MDBBtn>
                    </LinkContainer>
              </MDBContainer>
          </MDBNavbar>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<LoginScreen/>}/>
            <Route path={"/register"} element={<RegisterScreen/>}/>
        </Routes>
      </HashRouter>
  );
}

export default App;
