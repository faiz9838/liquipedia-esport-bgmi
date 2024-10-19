import React from 'react';
import { useParams } from 'react-router-dom';
import JonathanImg from "../assets/players/Jonathan.jpeg";
import MortalImg from "../assets/players/mortal.jpeg";

const playerData = {
    mortal: {
        name: 'Mortal',
        role: 'Player',
        career: 'Professional BGMI player for Team Soul, known for his leadership and MVP achievements in various tournaments.',
        achievements: 'MVP of BGMI World Championship, 5000+ kills in career, 10+ championships.',
        image: MortalImg,
    },
    jonathan: {
        name: 'Jonathan',
        role: 'Player',
        career: 'Jonathan is one of the best fraggers in the BGMI esports scene, known for his aggressive playstyle.',
        achievements: 'Top Fragger in BGMI World Championship, 7000+ kills in career.',
        image: JonathanImg,
    },
    scout: {
        name: 'Scout',
        role: 'Player',
        career: 'Scout is a versatile player known for his strategic gameplay and high kill counts.',
        achievements: 'Champion of several tournaments, popular content creator on YouTube.',
        image: JonathanImg,
    },
    pukar: {
        name: 'Pukar',
        role: 'Player',
        career: 'Pukar is known for his clutch plays and teamwork in competitive matches.',
        achievements: 'MVP in various tournaments, successful streaming career.',
        image: JonathanImg,
    },
    viper: {
        name: 'Viper',
        role: 'Player',
        career: 'Viper is recognized for his analytical approach to gameplay and community engagement.',
        achievements: 'Notable placements in tournaments, gaming influencer on social media.',
        image: JonathanImg,
    },
    // Add more players here...
};

const Player = () => {
    const { playerName } = useParams(); // Get player name from URL
    const player = playerData[playerName];

    if (!player) {
        return <div>Player not found</div>;
    }

    return (
        <div className="container p-6">
            <div className="card flex flex-col items-center">
                <img src={player.image} alt={player.name} className="w-48 h-48 rounded-lg border-4 border-blue-500" />
                <h2 className="card-title mt-4">{player.name}</h2>
                <p className="card-text">{player.role}</p>
                <p className="card-text mt-2">{player.career}</p>
                <p className="card-text mt-2 font-bold">Achievements:</p>
                <p className="card-text">{player.achievements}</p>
            </div>
        </div>
    );
};

export default Player;
