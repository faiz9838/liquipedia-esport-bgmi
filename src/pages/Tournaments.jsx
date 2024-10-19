import React from 'react';
import TournamentCard from '../components/TournamentCard';

const Tournaments = () => {
    const tournaments = [
        { name: 'BGMI Pro League', date: '2024-11-01', prizePool: '$100,000' },
        { name: 'BGMI Championship', date: '2024-12-15', prizePool: '$200,000' },
        // More tournaments...
    ];

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Tournaments</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {tournaments.map((tournament, index) => (
                    <TournamentCard key={index} name={tournament.name} date={tournament.date} prizePool={tournament.prizePool} />
                ))}
            </div>
        </div>
    );
};

export default Tournaments;
