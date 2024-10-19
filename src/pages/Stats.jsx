import React from 'react';

const Stats = () => {
    const playerStats = [
        { player: 'Mortal', kills: 2000, matches: 100, performance: 'Excellent' },
        { player: 'Jonathan', kills: 2500, matches: 110, performance: 'Outstanding' },
        { player: 'Scout', kills: 1800, matches: 90, performance: 'Good' },
        { player: 'Pukar', kills: 2200, matches: 95, performance: 'Very Good' },
        { player: 'Viper', kills: 1700, matches: 85, performance: 'Good' },
        { player: 'Ninja', kills: 1600, matches: 80, performance: 'Decent' },
        { player: 'Kronten', kills: 2100, matches: 105, performance: 'Very Good' },
    ];

    const faceToFaceComparison = {
        player1: 'Jonathan',
        player2: 'Mortal',
        killsDifference: 500,
        matchesDifference: 10,
    };

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Player Stats</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {playerStats.map((stats, index) => (
                    <div key={index} className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-lg shadow-lg text-white transition-transform duration-300 hover:scale-105">
                        <h3 className="text-2xl font-bold text-center">{stats.player}</h3>
                        <p className="mt-2">Kills: <span className="font-semibold">{stats.kills}</span></p>
                        <p>Matches: <span className="font-semibold">{stats.matches}</span></p>
                        <p>Performance: <span className={`font-semibold ${stats.performance === 'Outstanding' ? 'text-yellow-300' : stats.performance === 'Excellent' ? 'text-green-300' : 'text-gray-200'}`}>{stats.performance}</span></p>
                    </div>
                ))}
            </div>

            <h2 className="text-4xl font-bold text-gray-800 mt-8 mb-4 text-center">Face-to-Face Comparison</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-center text-gray-800 mb-2">
                    {faceToFaceComparison.player1} vs {faceToFaceComparison.player2}
                </h3>
                <p className="text-lg text-center">Kills Difference: <span className="font-semibold">{faceToFaceComparison.killsDifference}</span></p>
                <p className="text-lg text-center">Matches Difference: <span className="font-semibold">{faceToFaceComparison.matchesDifference}</span></p>
            </div>
        </div>
    );
};

export default Stats;
