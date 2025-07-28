import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Landing from './components/Landing';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import RoadMap from './components/RoadMap';
import LeaderBoard from './components/Leaderboard';
import Contact from './components/Contact';
import Navbar from './components/Sidebar';
import AddFriend from './components/AddFriend';
import Group from './components/Group';
import Login from './components/Login';
import './App.css';

function App() {
  const location = useLocation();
  // Hide sidebar/header on login and landing page
  const hideSidebar = location.pathname === '/login' || location.pathname === '/';
  const hideHeader = location.pathname === '/login' || location.pathname === '/';

  useEffect(() => {
    if (hideHeader) {
      document.body.classList.add('auth-page');
    } else {
      document.body.classList.remove('auth-page');
    }
    return () => {
      document.body.classList.remove('auth-page');
    };
  }, [hideHeader]);

  return (
    <>
      <div className={`flex ${hideHeader ? 'h-screen' : ''}`}>
        {!hideSidebar && <Navbar />}
        <main className={`flex-1 ${!hideSidebar ? 'ml-[280px]' : ''} ${hideHeader ? 'w-full' : ''} min-h-screen bg-secondary`}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/roadmap" element={<RoadMap />} />
            <Route path="/group" element={<Group />} />
            <Route path="/leaderboard" element={<LeaderBoard />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="Group/AddFriend" element={<AddFriend />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
