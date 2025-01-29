import React from 'react';
import { Trophy, Users, Award, Zap } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">BGMI Ludo Tournament Platform</h1>
            <p className="text-xl mb-8">Compete, Win, and Earn Amazing Prizes!</p>
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-md font-semibold hover:bg-indigo-50 transition-colors">
              Join Tournament
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Trophy className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Daily Tournaments</h3>
            <p className="text-gray-600">Participate in exciting tournaments every day</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Award className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Cash Prizes</h3>
            <p className="text-gray-600">Win exciting cash prizes and rewards</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Users className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Active Community</h3>
            <p className="text-gray-600">Join our growing community of players</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Zap className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Instant Payments</h3>
            <p className="text-gray-600">Quick and secure prize distribution</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;