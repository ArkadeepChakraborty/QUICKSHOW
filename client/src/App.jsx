import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Favourite from './pages/Favourite';
import MovieDetails from './pages/MovieDetails';
import MyBooking from './pages/MyBooking';
import SeatLayout from './pages/SeatLayout';
import { Toaster } from 'react-hot-toast';
import Footer from './components/Footer';
import Layout from './pages/admin/Layout';
import Dashboard from './pages/admin/Dashboard';
import AddShows from './pages/admin/AddShows';
import ListShows from './pages/admin/ListShows';
import ListBookings from './pages/admin/ListBookings';
import Releases from './pages/Releases';
import { useAppContext } from './context/AppContext';
import { SignIn } from '@clerk/clerk-react';
import Loading from './components/Loading';
import Ai from './components/Ai';
import AboutHome from './components/About/AboutHome';

const App = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  const { user } = useAppContext();

  return (
    <>
      <Toaster />
      {!isAdminRoute && <Navbar />}
      <Routes>
        {/* Public Routes */}
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/releases' element={<Releases />} />
        <Route path='/favorite' element={<Favourite />} />
        <Route path='/movies/:id' element={<MovieDetails />} />
        <Route path='/my-bookings' element={<MyBooking />} />
        <Route path='/loading/:nextUrl' element={<Loading />} />
        <Route path='/about' element={<AboutHome />} />
        
        <Route path='/movies/:id/:date' element={<SeatLayout />} />

        {/* Admin Routes */}
        <Route path='/admin/*' element={user ? <Layout />: (
          <div className='min-h-screen flex justify-center items-center'>
            <SignIn fallbackRedirectUrl={'/admin'}/>
          </div>
        )}>
          <Route index element={<Dashboard />} />
          <Route path='add-shows' element={<AddShows />} />
          <Route path='list-shows' element={<ListShows />} />
          <Route path='list-bookings' element={<ListBookings />} />
        </Route>
      </Routes>
     
      {!isAdminRoute && <Ai />}
      {!isAdminRoute && <Footer />}
    </>
  );
};

export default App;
