import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import AboutePage from './pages/AboutePage';
import ServicePage from './pages/ServicePage';
import OurTeamPage from './pages/OurTeamPage';
import RoomsPage from './pages/RoomsPage';
import ContactPage from './pages/ContactPage';
import BookingPage from './pages/BookingPage';
import AdminPage from './pages/AdminPage';
import SignPage from './pages/SignPage';
import RegisterPage from './pages/RegisterPage';
import AdminWelcom from './pages/AdminWelcom';
import AdminAddTeam from './pages/AdminAddTeam';
import AdminTeam from './pages/AdminTeam';
import AdminAddRoom from './pages/AdminAddRoom';
import AdminRoom from './pages/AdminRoom';
import AdminCustomer from './pages/AdminCustomer';
import UserProfile from './Customer/UserProfile';
import AdminProfile from './Admin/AdminProfile';
import BookRoom from './pages/BookRoom';
import EditTeam from './Admin/EditTeam';
import EditRoom from './Admin/EditRoom';
import EditCustomer from './Admin/EditCustomer';



function App() {

  const [count, setCount] = useState(0)

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Aboute' element={<AboutePage />} />
          <Route path='/Service' element={<ServicePage />} />
          <Route path='/Rooms' element={<RoomsPage />} />
          <Route path='/Contaxt' element={<ContactPage />} />
          <Route path='/Booking' element={<BookingPage />} />
          <Route path='/OurTeam' element={<OurTeamPage />} />
          <Route path='/Admin' element={<AdminPage />} />
          <Route path='/AddTeams' element={<AdminAddTeam />} />
          <Route path='/DisplayTeam' element={<AdminTeam />} />
          <Route path='/AddRoom' element={<AdminAddRoom />} />
          <Route path='/DisplayRooms' element={<AdminRoom />} />
          <Route path='/DisplayCustomer' element={<AdminCustomer />} />
          <Route path='/Signin' element={<SignPage />} />
          <Route path='/Register' element={<RegisterPage />} />
          <Route path='/Welcom' element={<AdminWelcom />} />
          <Route path='/User' element={<UserProfile />} />
          <Route path='/Book/:Id' element={<BookRoom />} />
          <Route path='/UserAdmin' element={<AdminProfile />} />
          <Route path='/EditTeam/:Id' element={<EditTeam />} />
          <Route path='/EditRoom/:Rid' element={<EditRoom />} />
          <Route path='/EditCustomer/:rid' element={<EditCustomer />} />

        </Routes>
      </Router>

    </div>
  )
}

export default App
