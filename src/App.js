import './App.scss';
import {HashRouter, Route, Routes} from "react-router-dom";
import HomePage from "./Components/HomePage";
import LoginScreen from "./Components/LoginScreen";
import RegisterScreen from "./Components/RegisterScreen";
import Dashboard from "./Components/Dashboard";
import Reset from "./Components/Reset";



function App() {
  return (
      <HashRouter>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<LoginScreen/>}/>
            <Route path="/register" element={<RegisterScreen/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/reset" element={<Reset/>}/>
        </Routes>
      </HashRouter>
  );
}

export default App;
