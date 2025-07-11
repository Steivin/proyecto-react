//import logo from './logo.svg';
//import './App.css';

//function App() {
//  return (
//    <div className="App">
//      <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//        <p>
//          Edit <code>src/App.js</code> and save to reload.
//        </p>
//        <a
//          className="App-link"
 //         href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//          Learn React
//        </a>
//      </header>
//    </div>
//  );
//}

//export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage/ForgotPasswordPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
// Importar los hooks
import Usestate from './pages/Playground/useState';
import Useffect from './pages/Playground/useEffect';
import Usecontext from './pages/Playground/useContext';
import Useref from './pages/Playground/useRef';
import Usememo from './pages/Playground/useMemo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/forgot" element={<ForgotPasswordPage/>}/>
        <Route path="/dashboard" element={<DashboardPage/>}/>
        {/*               Rutas para los Hooks            */}
        <Route path="/useState" element={<Usestate/>}/>
        <Route path="/useEffect" element={<Useffect/>}/>
        <Route path="/useContext" element={<Usecontext/>}/>
        <Route path="/useRef" element={<Useref/>}/>
        <Route path="/useMemo" element={<Usememo/>}/>

      </Routes>
    </BrowserRouter>
    );
}

export default App;