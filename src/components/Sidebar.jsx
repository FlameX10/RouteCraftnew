import React from 'react'
import { Link } from 'react-router-dom';
import { Home, BarChart3, User, Map, Users, Trophy, MessageCircle } from 'lucide-react';

function Sidebar() {
  const menuItems = [
    { path: "/home", name: "Home", icon: <Home size={20} /> },
    { path: "/dashboard", name: "Dashboard", icon: <BarChart3 size={20} /> },
    { path: "/profile", name: "Profile", icon: <User size={20} /> },
    { path: "/roadmap", name: "Road Map", icon: <Map size={20} /> },
    { path: "/group", name: "Group", icon: <Users size={20} /> },
    { path: "/leaderboard", name: "Leader Board", icon: <Trophy size={20} /> },
    { path: "/contact", name: "Contact", icon: <MessageCircle size={20} /> },
  ];

  return (
    <nav className="sidebar">
      <div className="text-center mb-6">
        <h2 className="text-display font-bold text-2xl text-white">RouteCraft</h2>
        <p className="text-primary-200 text-sm mt-1">Learning Platform</p>
      </div>
      
      <ul className="space-y-1">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link 
              to={item.path}
              className="flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 hover:bg-white/10 hover:scale-105 text-white"
            >
              <span className="text-primary-200 flex-shrink-0">{item.icon}</span>
              <span className="font-medium">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      
      {/* User Profile Section */}
      <div className="mt-auto pt-6 border-t border-primary-700">
        <div className="flex items-center space-x-3 p-3">
          <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
            <User size={20} className="text-white" />
          </div>
          <div>
            <p className="text-white font-medium">Prasen Shinde</p>
            <p className="text-primary-200 text-sm">Student</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Sidebar
