import React from 'react';
import PlayerCard from './PlayerCard'; // Adjust the import path as necessary

const PlayersSection = () => {
    const players = [
        { name: 'Jonathan', role: 'Player', link: '/players/jonathan' },
        { name: 'Gill', role: 'Coach', link: '/players/gill' },
        { name: 'ClutchGod', role: 'Analyst', link: '/players/clutchgod' },
        { name: 'Vikendi', role: 'Assault', link: '/players/vikendi' },
        { name: 'Snax', role: 'Support', link: '/players/snax' },
    ];

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Players</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {players.map((player, index) => (
                    <PlayerCard key={index} name={player.name} role={player.role} link={player.link} />
                ))}
            </div>
        </div>
    );
};

export default PlayersSection;
