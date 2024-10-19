import React from 'react';
import PlayerCard from '../components/PlayerCard';
import JonathanImg from "../assets/players/Jonathan.jpeg"
import MortalImg from "../assets/players/mortal.jpeg"

const Players = () => {
    const players = [
        { name: 'Jonathan', kills: 700, rank: 1, img: JonathanImg },
        { name: 'Mortal', kills: 200, rank: 2, img: MortalImg },
        { name: 'Dynamo', kills: 300, rank: 3, img: JonathanImg },
        { name: 'Scout', kills: 350, rank: 4, img: JonathanImg },
        { name: 'Paraboy', kills: 500, rank: 5, img: JonathanImg },
        { name: 'Zgod', kills: 450, rank: 6, img: JonathanImg },
        { name: 'Bhuvan', kills: 180, rank: 7, img: JonathanImg },
        { name: 'Kronten', kills: 400, rank: 8, img: JonathanImg },
        { name: 'Sultan', kills: 260, rank: 9, img: JonathanImg },
        { name: 'iFlick', kills: 220, rank: 10, img: JonathanImg },
        { name: 'Ninja', kills: 190, rank: 11, img: JonathanImg },
        { name: 'ClutchGod', kills: 300, rank: 12, img: JonathanImg },
        { name: 'Mavi', kills: 310, rank: 13, img: JonathanImg },
        { name: 'Owais', kills: 270, rank: 14, img: JonathanImg },
        { name: 'Ronen', kills: 210, rank: 15, img: JonathanImg },
        { name: 'Raistar', kills: 290, rank: 16, img: JonathanImg },
        { name: 'Soul', kills: 150, rank: 17, img: JonathanImg },
        { name: 'Alpha', kills: 320, rank: 18, img: JonathanImg },
        { name: 'Sponge', kills: 180, rank: 19, img: JonathanImg },
        { name: 'Viper', kills: 280, rank: 20, img: JonathanImg },
        { name: 'Neyoo', kills: 230, rank: 21, img: JonathanImg },
        { name: 'SaaS', kills: 240, rank: 22, img: JonathanImg },
        { name: 'Turtle', kills: 200, rank: 23, img: JonathanImg },
        { name: 'Riot', kills: 300, rank: 24, img: JonathanImg },
        { name: 'Raider', kills: 350, rank: 25, img: JonathanImg },
        { name: 'Hector', kills: 260, rank: 26, img: JonathanImg },
        { name: 'Bobo', kills: 270, rank: 27, img: JonathanImg },
        { name: 'Scream', kills: 230, rank: 28, img: JonathanImg },
        { name: 'Ninja_123', kills: 280, rank: 29, img: JonathanImg },
        { name: 'Phantom', kills: 200, rank: 30, img: JonathanImg },
        { name: 'Zero', kills: 190, rank: 31, img: JonathanImg },
        { name: 'Ghost', kills: 340, rank: 32, img: JonathanImg },
        { name: 'Lion', kills: 360, rank: 33, img: JonathanImg },
        { name: 'Fire', kills: 250, rank: 34, img: JonathanImg },
        { name: 'Reckless', kills: 300, rank: 35, img: JonathanImg },
        { name: 'Sniper', kills: 380, rank: 36, img: JonathanImg },
        { name: 'Gamer', kills: 390, rank: 37, img: JonathanImg },
        { name: 'Hunter', kills: 410, rank: 38, img: JonathanImg },
        { name: 'Elite', kills: 420, rank: 39, img: JonathanImg },
        { name: 'Phantom_Killer', kills: 430, rank: 40, img: JonathanImg },
        { name: 'Savage', kills: 440, rank: 41, img: JonathanImg },
        { name: 'Hero', kills: 450, rank: 42, img: JonathanImg },
        { name: 'Wolf', kills: 460, rank: 43, img: JonathanImg },
        { name: 'Shiva', kills: 470, rank: 44, img: JonathanImg },
        { name: 'Clutch', kills: 480, rank: 45, img: JonathanImg },
        { name: 'Zeus', kills: 490, rank: 46, img: JonathanImg },
        { name: 'Fury', kills: 500, rank: 47, img: JonathanImg },
        { name: 'Angel', kills: 510, rank: 48, img: JonathanImg },
        { name: 'Psycho', kills: 520, rank: 49, img: JonathanImg },
        { name: 'Knight', kills: 530, rank: 50, img: JonathanImg },
        { name: 'Star', kills: 540, rank: 51, img: JonathanImg },
        { name: 'Nighthawk', kills: 550, rank: 52, img: JonathanImg },
        { name: 'Firefly', kills: 560, rank: 53, img: JonathanImg },
        { name: 'Titan', kills: 570, rank: 54, img: JonathanImg },
        { name: 'Storm', kills: 580, rank: 55, img: JonathanImg },
        { name: 'Ninja_Warrior', kills: 590, rank: 56, img: JonathanImg },
        { name: 'Daredevil', kills: 600, rank: 57, img: JonathanImg },
        { name: 'Vengeance', kills: 610, rank: 58, img: JonathanImg },
        { name: 'Renegade', kills: 620, rank: 59, img: JonathanImg },
        { name: 'Lethal', kills: 630, rank: 60, img: JonathanImg },
        { name: 'Dusk', kills: 640, rank: 61, img: JonathanImg },
        { name: 'Blaze', kills: 650, rank: 62, img: JonathanImg },
        { name: 'Zephyr', kills: 660, rank: 63, img: JonathanImg },
        { name: 'Frost', kills: 670, rank: 64, img: JonathanImg },
        { name: 'Viper_King', kills: 680, rank: 65, img: JonathanImg },
        { name: 'Titan_Slayer', kills: 690, rank: 66, img: JonathanImg },
        { name: 'Talon', kills: 700, rank: 67, img: JonathanImg },
        { name: 'Brawler', kills: 710, rank: 68, img: JonathanImg },
        { name: 'Cheetah', kills: 720, rank: 69, img: JonathanImg },
        { name: 'Falcon', kills: 730, rank: 70, img: JonathanImg },
        { name: 'Phantom_Assassin', kills: 740, rank: 71, img: JonathanImg },
        { name: 'Goliath', kills: 750, rank: 72, img: JonathanImg },
        { name: 'Thunder', kills: 760, rank: 73, img: JonathanImg },
        { name: 'Raider_Alpha', kills: 770, rank: 74, img: JonathanImg },
        { name: 'Nexus', kills: 780, rank: 75, img: JonathanImg },
        { name: 'Falcon_Hawk', kills: 790, rank: 76, img: JonathanImg },
        { name: 'Warrior', kills: 800, rank: 77, img: JonathanImg },
        { name: 'Archer', kills: 810, rank: 78, img: JonathanImg },
        { name: 'Reaper', kills: 820, rank: 79, img: JonathanImg },
        { name: 'Wraith', kills: 830, rank: 80, img: JonathanImg },
    ];


    return (
        <div className="max-w-7xl mx-auto p-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Players</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {players.map((player, index) => (
                    <PlayerCard key={index} img={player.img} name={player.name} kills={player.kills} rank={player.rank} />
                ))}
            </div>
        </div>
    );
};

export default Players;
