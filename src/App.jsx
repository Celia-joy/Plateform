import LoginPage from './pages/auth/LoginPage'
import SignupPage from './pages/auth/SignupPage'
import LandingPage from './pages/LandingPage'
import CheckEmailPage from './pages/auth/CheckEmailPage'
import ResetPasswordPage from './pages/auth/ResetPasswordPage'
import LinkSentPage from './pages/auth/LinkSentPage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
export default function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/check-email" element={<CheckEmailPage />} />
                <Route path="/reset-password" element={<ResetPasswordPage />} />
                <Route path="/link-sent" element={<LinkSentPage/>}/>
                <Route path="/dashboard" element={<DashboardLayout/>}>
                    <Route index element={<div>Dashboard</div>}/>
                    
                </Route>
            </Routes>
        </BrowserRouter>
    )
}