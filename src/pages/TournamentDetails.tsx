import React from 'react';
import { useParams } from 'react-router-dom';
import { Trophy, Calendar, Users, DollarSign, Clock, Shield, Share2 } from 'lucide-react';

const TournamentDetails = () => {
  const { id } = useParams();

  // Mock data - will be replaced with API call
  const tournament = {
    id: 1,
    title: "Weekend Warriors Cup",
    date: "2024-03-23",
    time: "14:00",
    entryFee: 100,
    prizePool: 10000,
    maxPlayers: 100,
    registeredPlayers: 45,
    status: "registering",
    description: "Join the most exciting Ludo tournament of the weekend! Compete against the best players and win amazing cash prizes.",
    rules: [
      "Players must join the tournament lobby 15 minutes before start time",
      "All players must have the latest version of BGMI installed",
      "Screenshots of results must be submitted after each match",
      "Any form of cheating will result in immediate disqualification",
      "Tournament admins' decision will be final"
    ],
    prizes: [
      { position: "1st", amount: 5000 },
      { position: "2nd", amount: 3000 },
      { position: "3rd", amount: 2000 }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-md">
        {/* Header */}
        <div className="bg-indigo-600 text-white p-8 rounded-t-lg">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold mb-4">{tournament.title}</h1>
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>{new Date(tournament.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>{tournament.time}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  <span>{tournament.registeredPlayers}/{tournament.maxPlayers}</span>
                </div>
              </div>
            </div>
            <button className="bg-white text-indigo-600 px-6 py-2 rounded-md font-semibold hover:bg-indigo-50">
              Register Now
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Prize Pool and Entry Fee */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-indigo-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Trophy className="h-6 w-6 text-indigo-600 mr-2" />
                <h2 className="text-xl font-semibold">Prize Pool</h2>
              </div>
              <div className="space-y-3">
                {tournament.prizes.map((prize) => (
                  <div key={prize.position} className="flex justify-between items-center">
                    <span className="text-gray-600">{prize.position}</span>
                    <span className="font-semibold">₹{prize.amount}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <DollarSign className="h-6 w-6 text-green-600 mr-2" />
                <h2 className="text-xl font-semibold">Entry Details</h2>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Entry Fee</span>
                  <span className="font-semibold">₹{tournament.entryFee}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Platform Fee</span>
                  <span className="font-semibold">₹10</span>
                </div>
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total</span>
                    <span className="font-semibold">₹{tournament.entryFee + 10}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">About Tournament</h2>
            <p className="text-gray-600">{tournament.description}</p>
          </div>

          {/* Rules */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <Shield className="h-6 w-6 text-indigo-600 mr-2" />
              <h2 className="text-xl font-semibold">Tournament Rules</h2>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {tournament.rules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>
          </div>

          {/* Share */}
          <div className="flex items-center justify-center border-t pt-8">
            <button className="flex items-center text-indigo-600 hover:text-indigo-700">
              <Share2 className="h-5 w-5 mr-2" />
              Share Tournament
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentDetails;