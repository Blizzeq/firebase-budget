import './App.scss';
import {HashRouter, Route, Routes} from "react-router-dom";
import {lazy, Suspense, useState} from "react";
import LoadingScreen from "./Components/LoadingScreen";


const LazyHomePage = lazy(() => import('./Components/HomePage'));
const LazyLoginScreen = lazy(() => import('./Components/LoginScreen'));
const LazyRegisterScreen = lazy(() => import('./Components/RegisterScreen'));
const LazyDashboard = lazy(() => import('./Components/Dashboard'));
const LazyReset = lazy(() => import('./Components/Reset'));


function App() {

    const [isLoading, setIsLoading] = useState(false);

  return (
      <HashRouter>
        <Routes>
            <Route path="/" element={<Suspense fallback={<LoadingScreen/>}><LazyHomePage/></Suspense>}/>
            <Route path="/login" element={<Suspense fallback={<LoadingScreen/>}><LazyLoginScreen isLoading={isLoading} setIsLoading={setIsLoading}/></Suspense>}/>
            <Route path="/register" element={<Suspense fallback={<LoadingScreen/>}><LazyRegisterScreen isLoading={isLoading} setIsLoading={setIsLoading}/></Suspense>}/>
            <Route path="/dashboard" element={<Suspense fallback={<LoadingScreen/>}><LazyDashboard isLoading={isLoading} setIsLoading={setIsLoading}/></Suspense>}/>
            <Route path="/reset" element={<Suspense fallback={<LoadingScreen/>}><LazyReset isLoading={isLoading} setIsLoading={setIsLoading}/></Suspense>}/>
        </Routes>
      </HashRouter>
  );
}

export default App;
