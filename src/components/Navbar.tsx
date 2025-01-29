import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, User, LogIn } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user } = useAuth();

  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Trophy className="h-8 w-8" />
            <span className="font-bold text-xl">BGMI Tournaments</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link to="/tournaments" className="hover:text-indigo-200 transition-colors">
              Tournaments
            </Link>
            {user ? (
              <Link to="/dashboard" className="flex items-center space-x-1 hover:text-indigo-200 transition-colors">
                <User className="h-5 w-5" />
                <span>Dashboard</span>
              </Link>
            ) : (
              <Link to="/login" className="flex items-center space-x-1 bg-white text-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-100 transition-colors">
                <LogIn className="h-5 w-5" />
                <span>Login</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;