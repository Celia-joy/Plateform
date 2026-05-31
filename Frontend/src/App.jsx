import LoginPage from './pages/auth/LoginPage'
import SignupPage from './pages/auth/SignupPage'
import LandingPage from './pages/LandingPage'
import CheckEmailPage from './pages/auth/CheckEmailPage'
import ResetPasswordPage from './pages/auth/ResetPasswordPage'
import LinkSentPage from './pages/auth/LinkSentPage'
import DashboardLayout from './components/layout/DashboardLayout'
import OverviewPage from './pages/dashboard/OverviewPage'
import OrdersPage from './pages/dashboard/OrdersPage'
import ClientsPage from './pages/dashboard/ClientsPage'
import MenusPage from './pages/dashboard/MenusPage'
import NotificationsPage from './pages/dashboard/NotificationsPage'
import StaffPage from './pages/dashboard/StaffPage'
import TableBookingPage from './pages/dashboard/TableBookingPage'
import OrderConfirmedPage from './pages/dashboard/OrderConfirmedPage'
import SettingsPage from './pages/dashboard/SettingsPage'
import NotFoundPage from './pages/NotFoundPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/check-email" element={<CheckEmailPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/link-sent" element={<LinkSentPage />} />

        
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<OverviewPage />} />
          <Route path="orders" element={<OrdersPage />} />
          <Route path="clients" element={<ClientsPage />} />
          <Route path="menus" element={<MenusPage />} />
          <Route path="notifications" element={<NotificationsPage />} />
          <Route path="staff" element={<StaffPage />} />
          <Route path="table-booking" element={<TableBookingPage />} />
          <Route path="order-confirmed" element={<OrderConfirmedPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}