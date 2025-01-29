import React from 'react';
import { Trophy, Calendar, Users, DollarSign, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/login');
  };

  // Mock data - will be replaced with API calls
  const userTournaments = [
    {
      id: 1,
      title: "Weekend Warriors Cup",
      date: "2024-03-23",
      status: "Registered",
      position: "Not started"
    },
    {
      id: 2,
      title: "Pro League Season 1",
      date: "2024-03-20",
      status: "Completed",
      position: "3rd"
    }
  ];

  const upcomingTournaments = [
    {
      id: 3,
      title: "Midnight Showdown",
      date: "2024-03-25",
      entryFee: 150,
      prizePool: 15000
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Welcome back!</h1>
            <p className="text-gray-600">{user?.email}</p>
          </div>
          <div className="flex space-x-4">
            <button className="flex items-center text-gray-600 hover:text-gray-900">
              <Settings className="h-5 w-5 mr-2" />
              Settings
            </button>
            <button
              onClick={handleSignOut}
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <LogOut className="h-5 w-5 mr-2" />
              Sign out
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* My Tournaments */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">My Tournaments</h2>
                <div className="space-y-4">
                  {userTournaments.map((tournament) => (
                    <div
                      key={tournament.id}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center space-x-4">
                        <Trophy className="h-8 w-8 text-indigo-600" />
                        <div>
                          <h3 className="font-semibold">{tournament.title}</h3>
                          <p className="text-sm text-gray-600">
                            {new Date(tournament.date).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-indigo-600">
                          {tournament.status}
                        </div>
                        <div className="text-sm text-gray-600">
                          {tournament.position}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-gray-500 text-sm">Total Tournaments</h3>
                <div className="mt-2 flex items-center">
                  <Trophy className="h-5 w-5 text-indigo-600 mr-2" />
                  <span className="text-2xl font-semibold">12</span>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-gray-500 text-sm">Wins</h3>
                <div className="mt-2 flex items-center">
                  <Trophy className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-2xl font-semibold">3</span>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-gray-500 text-sm">Total Earnings</h3>
                <div className="mt-2 flex items-center">
                  <DollarSign className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-2xl font-semibold">₹15,000</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Upcoming Tournaments */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Upcoming Tournaments</h2>
                <div className="space-y-4">
                  {upcomingTournaments.map((tournament) => (
                    <div
                      key={tournament.id}
                      className="p-4 border border-gray-100 rounded-lg hover:border-indigo-100 transition-colors"
                    >
                      <h3 className="font-semibold">{tournament.title}</h3>
                      <div className="mt-2 space-y-2 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          {new Date(tournament.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-2" />
                          ₹{tournament.prizePool} prize pool
                        </div>
                        <button className="mt-2 w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
                          Register Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Quick Stats</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Win Rate</span>
                  <span className="font-semibold">25%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Matches</span>
                  <span className="font-semibold">48</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Tournaments Won</span>
                  <span className="font-semibold">3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;