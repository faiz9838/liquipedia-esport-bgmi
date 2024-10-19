import React from 'react';

const UpcomingTournaments = () => {
    const tournaments = [
        { name: 'BGMI World Championship', date: '2024-11-01', location: 'Dubai' },
        { name: 'BGMI Pro Invitational', date: '2024-12-10', location: 'India' },
        // More tournaments...
    ];

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Upcoming Tournaments</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {tournaments.map((tournament, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold">{tournament.name}</h3>
                        <p>Date: {tournament.date}</p>
                        <p>Location: {tournament.location}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UpcomingTournaments;
