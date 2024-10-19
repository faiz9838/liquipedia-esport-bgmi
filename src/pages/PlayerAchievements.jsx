import React from 'react';

const PlayerAchievements = () => {
    const achievements = [
        { player: 'Mortal', achievements: 'Multiple MVP awards, Champion of BGMI World Championship, Best Player on YouTube' },
        { player: 'Jonathan', achievements: 'Best Fragger 2023, BGMI Champion, Viral Gaming Streamer' },
        { player: 'Scout', achievements: 'Top 3 in various BGMI tournaments, Influencer on Instagram and YouTube' },
        { player: 'Pukar', achievements: 'Multiple MVPs, known for his tactical gameplay on Twitch and YouTube' },
        { player: 'Viper', achievements: 'Top 5 finishes in major tournaments, popular for game analysis on YouTube' },
        { player: 'Ninja', achievements: 'Competitive player, gained fame through Instagram clips' },
        { player: 'Kronten', achievements: 'Notable achievements in tournaments, influencer with a massive following' },
    ];

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Player Achievements</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                    <div key={index} className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-lg shadow-lg text-white transition-transform duration-300 hover:scale-105">
                        <h3 className="text-2xl font-bold text-center">{achievement.player}</h3>
                        <p className="mt-2 text-lg text-center">{achievement.achievements}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PlayerAchievements;
