import { BrowserRouter as Router, Route, Routes,Switch } from 'react-router-dom';
import { AuthProvider } from "./contexts/authContext";
import SignIn from './components/signin/signin';
import Onboardioo from './components/onboardio';
function App() {
  return (
    <div className="App">
      <AuthProvider>
       <>
      <Routes>
        <Route  path="/"element={<SignIn/> } />
        <Route path="/onboardio" element={<Onboardioo/>} />
        </Routes>
        </>

      </AuthProvider>

    </div>
  );
}

export default App;