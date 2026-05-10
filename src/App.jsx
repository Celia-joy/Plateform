import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import LandingPage from './pages/LandingPage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
export default function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/landingpage" element={<LandingPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}