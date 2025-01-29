import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Calendar, Users, DollarSign } from 'lucide-react';

// Mock data - will be replaced with real API data later
const tournaments = [
  {
    id: 1,
    title: "Weekend Warriors Cup",
    date: "2024-03-23",
    entryFee: 100,
    prizePool: 10000,
    maxPlayers: 100,
    registeredPlayers: 45,
    status: "registering"
  },
  {
    id: 2,
    title: "Pro League Season 1",
    date: "2024-03-24",
    entryFee: 200,
    prizePool: 20000,
    maxPlayers: 64,
    registeredPlayers: 60,
    status: "registering"
  },
  {
    id: 3,
    title: "Midnight Showdown",
    date: "2024-03-25",
    entryFee: 150,
    prizePool: 15000,
    maxPlayers: 80,
    registeredPlayers: 25,
    status: "registering"
  }
];

const Tournaments = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Active Tournaments</h1>
        <div className="flex gap-4">
          <select className="bg-white border border-gray-300 rounded-md px-4 py-2">
            <option>All Tournaments</option>
            <option>Registering</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors">
            Create Tournament
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tournaments.map((tournament) => (
          <Link 
            key={tournament.id}
            to={`/tournaments/${tournament.id}`}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Trophy className="h-8 w-8 text-indigo-600" />
                <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                  {tournament.status}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-4">{tournament.title}</h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>{new Date(tournament.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="h-5 w-5 mr-2" />
                  <span>{tournament.registeredPlayers}/{tournament.maxPlayers} players</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <DollarSign className="h-5 w-5 mr-2" />
                  <span>₹{tournament.prizePool} prize pool</span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Entry Fee:</span>
                  <span className="text-lg font-semibold text-indigo-600">₹{tournament.entryFee}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Tournaments;