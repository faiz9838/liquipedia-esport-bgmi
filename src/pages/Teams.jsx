import React from 'react';
import { Link } from 'react-router-dom';
import soulImage from '../assets/images.png'
import godlikeImage from '../assets/Godlike.png'
// This CSS file contains hover styles

const teams = [
    {
        name: 'Team Soul',
        image: soulImage,
        players: [
            { name: 'Mortal', role: 'IGL', link: '/players/mortal' },
            { name: 'Viper', role: 'Support', link: '/players/viper' },
            { name: 'Scout', role: 'Assault', link: '/players/scout' },
            { name: 'Dynamo', role: 'Scout', link: '/players/dynamo' },
            { name: 'Warlock', role: 'Analyst', link: '/players/warlock' },
            { name: 'Specter', role: 'Coach', link: '/players/specter' },
        ],
    },
    {
        name: 'Godlike Esport',
        image: godlikeImage,
        players: [
            { name: 'Jonathan', role: 'Player', link: '/players/jonathan' },
            { name: 'Gill', role: 'Coach', link: '/players/gill' },
            { name: 'ClutchGod', role: 'Analyst', link: '/players/clutchgod' },
            { name: 'Vikendi', role: 'Assault', link: '/players/vikendi' },
            { name: 'Snax', role: 'Support', link: '/players/snax' },
        ],
    },
    {
        name: 'T1 Team',
        image: soulImage,
        players: [
            { name: 'Player1', role: 'Player', link: '/players/player1' },
            { name: 'Player2', role: 'Coach', link: '/players/player2' },
            { name: 'Player3', role: 'Analyst', link: '/players/player3' },
            { name: 'Player4', role: 'Assault', link: '/players/player4' },
            { name: 'Player5', role: 'Sniper', link: '/players/player5' },
        ],
    },
    {
        name: 'T2 Team',
        image: godlikeImage,
        players: [
            { name: 'Player6', role: 'Player', link: '/players/player6' },
            { name: 'Player7', role: 'Coach', link: '/players/player7' },
            { name: 'Player8', role: 'Analyst', link: '/players/player8' },
            { name: 'Player9', role: 'Scout', link: '/players/player9' },
            { name: 'Player10', role: 'Support', link: '/players/player10' },
        ],
    },
    {
        name: 'T3 Team',
        image: soulImage,
        players: [
            { name: 'Player11', role: 'Player', link: '/players/player11' },
            { name: 'Player12', role: 'Coach', link: '/players/player12' },
            { name: 'Player13', role: 'Analyst', link: '/players/player13' },
            { name: 'Player14', role: 'Assault', link: '/players/player14' },
            { name: 'Player15', role: 'Sniper', link: '/players/player15' },
        ],
    },
    {
        name: 'T4 Team',
        image: godlikeImage,
        players: [
            { name: 'Player16', role: 'Player', link: '/players/player16' },
            { name: 'Player17', role: 'Coach', link: '/players/player17' },
            { name: 'Player18', role: 'Analyst', link: '/players/player18' },
            { name: 'Player19', role: 'Scout', link: '/players/player19' },
            { name: 'Player20', role: 'Support', link: '/players/player20' },
        ],
    },
    {
        name: 'T5 Team',
        image: soulImage,
        players: [
            { name: 'Player21', role: 'Player', link: '/players/player21' },
            { name: 'Player22', role: 'Coach', link: '/players/player22' },
            { name: 'Player23', role: 'Analyst', link: '/players/player23' },
            { name: 'Player24', role: 'Assault', link: '/players/player24' },
            { name: 'Player25', role: 'Sniper', link: '/players/player25' },
        ],
    },
    {
        name: 'T6 Team',
        image: godlikeImage,
        players: [
            { name: 'Player26', role: 'Player', link: '/players/player26' },
            { name: 'Player27', role: 'Coach', link: '/players/player27' },
            { name: 'Player28', role: 'Analyst', link: '/players/player28' },
            { name: 'Player29', role: 'Scout', link: '/players/player29' },
            { name: 'Player30', role: 'Support', link: '/players/player30' },
        ],
    },
    {
        name: 'T7 Team',
        image: soulImage,
        players: [
            { name: 'Player31', role: 'Player', link: '/players/player31' },
            { name: 'Player32', role: 'Coach', link: '/players/player32' },
            { name: 'Player33', role: 'Analyst', link: '/players/player33' },
            { name: 'Player34', role: 'Assault', link: '/players/player34' },
            { name: 'Player35', role: 'Sniper', link: '/players/player35' },
        ],
    },
    {
        name: 'T8 Team',
        image: godlikeImage,
        players: [
            { name: 'Player36', role: 'Player', link: '/players/player36' },
            { name: 'Player37', role: 'Coach', link: '/players/player37' },
            { name: 'Player38', role: 'Analyst', link: '/players/player38' },
            { name: 'Player39', role: 'Scout', link: '/players/player39' },
            { name: 'Player40', role: 'Support', link: '/players/player40' },
        ],
    },
    {
        name: 'T9 Team',
        image: soulImage,
        players: [
            { name: 'Player41', role: 'Player', link: '/players/player41' },
            { name: 'Player42', role: 'Coach', link: '/players/player42' },
            { name: 'Player43', role: 'Analyst', link: '/players/player43' },
            { name: 'Player44', role: 'Assault', link: '/players/player44' },
            { name: 'Player45', role: 'Sniper', link: '/players/player45' },
        ],
    },
    {
        name: 'T10 Team',
        image: godlikeImage,
        players: [
            { name: 'Player46', role: 'Player', link: '/players/player46' },
            { name: 'Player47', role: 'Coach', link: '/players/player47' },
            { name: 'Player48', role: 'Analyst', link: '/players/player48' },
            { name: 'Player49', role: 'Scout', link: '/players/player49' },
            { name: 'Player50', role: 'Support', link: '/players/player50' },
        ],
    },
    {
        name: 'T11 Team',
        image: soulImage,
        players: [
            { name: 'Player51', role: 'Player', link: '/players/player51' },
            { name: 'Player52', role: 'Coach', link: '/players/player52' },
            { name: 'Player53', role: 'Analyst', link: '/players/player53' },
            { name: 'Player54', role: 'Assault', link: '/players/player54' },
            { name: 'Player55', role: 'Sniper', link: '/players/player55' },
        ],
    },
    {
        name: 'T12 Team',
        image: godlikeImage,
        players: [
            { name: 'Player56', role: 'Player', link: '/players/player56' },
            { name: 'Player57', role: 'Coach', link: '/players/player57' },
            { name: 'Player58', role: 'Analyst', link: '/players/player58' },
            { name: 'Player59', role: 'Scout', link: '/players/player59' },
            { name: 'Player60', role: 'Support', link: '/players/player60' },
        ],
    },
    {
        name: 'T13 Team',
        image: soulImage,
        players: [
            { name: 'Player61', role: 'Player', link: '/players/player61' },
            { name: 'Player62', role: 'Coach', link: '/players/player62' },
            { name: 'Player63', role: 'Analyst', link: '/players/player63' },
            { name: 'Player64', role: 'Assault', link: '/players/player64' },
            { name: 'Player65', role: 'Sniper', link: '/players/player65' },
        ],
    },
    {
        name: 'T14 Team',
        image: godlikeImage,
        players: [
            { name: 'Player66', role: 'Player', link: '/players/player66' },
            { name: 'Player67', role: 'Coach', link: '/players/player67' },
            { name: 'Player68', role: 'Analyst', link: '/players/player68' },
            { name: 'Player69', role: 'Scout', link: '/players/player69' },
            { name: 'Player70', role: 'Support', link: '/players/player70' },
        ],
    },
    {
        name: 'T15 Team',
        image: soulImage,
        players: [
            { name: 'Player71', role: 'Player', link: '/players/player71' },
            { name: 'Player72', role: 'Coach', link: '/players/player72' },
            { name: 'Player73', role: 'Analyst', link: '/players/player73' },
            { name: 'Player74', role: 'Assault', link: '/players/player74' },
            { name: 'Player75', role: 'Sniper', link: '/players/player75' },
        ],
    },
    {
        name: 'T16 Team',
        image: godlikeImage,
        players: [
            { name: 'Player76', role: 'Player', link: '/players/player76' },
            { name: 'Player77', role: 'Coach', link: '/players/player77' },
            { name: 'Player78', role: 'Analyst', link: '/players/player78' },
            { name: 'Player79', role: 'Scout', link: '/players/player79' },
            { name: 'Player80', role: 'Support', link: '/players/player80' },
        ],
    },
    {
        name: 'T17 Team',
        image: soulImage,
        players: [
            { name: 'Player81', role: 'Player', link: '/players/player81' },
            { name: 'Player82', role: 'Coach', link: '/players/player82' },
            { name: 'Player83', role: 'Analyst', link: '/players/player83' },
            { name: 'Player84', role: 'Assault', link: '/players/player84' },
            { name: 'Player85', role: 'Sniper', link: '/players/player85' },
        ],
    },
    {
        name: 'T18 Team',
        image: godlikeImage,
        players: [
            { name: 'Player86', role: 'Player', link: '/players/player86' },
            { name: 'Player87', role: 'Coach', link: '/players/player87' },
            { name: 'Player88', role: 'Analyst', link: '/players/player88' },
            { name: 'Player89', role: 'Scout', link: '/players/player89' },
            { name: 'Player90', role: 'Support', link: '/players/player90' },
        ],
    },
    {
        name: 'T19 Team',
        image: soulImage,
        players: [
            { name: 'Player91', role: 'Player', link: '/players/player91' },
            { name: 'Player92', role: 'Coach', link: '/players/player92' },
            { name: 'Player93', role: 'Analyst', link: '/players/player93' },
            { name: 'Player94', role: 'Assault', link: '/players/player94' },
            { name: 'Player95', role: 'Sniper', link: '/players/player95' },
        ],
    },
    {
        name: 'T20 Team',
        image: godlikeImage,
        players: [
            { name: 'Player96', role: 'Player', link: '/players/player96' },
            { name: 'Player97', role: 'Coach', link: '/players/player97' },
            { name: 'Player98', role: 'Analyst', link: '/players/player98' },
            { name: 'Player99', role: 'Scout', link: '/players/player99' },
            { name: 'Player100', role: 'Support', link: '/players/player100' },
        ],
    },
];

const Teams = () => {
    return (

        <div className="max-w-7xl mx-auto p-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Teams</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {teams.map((team, index) => (
                    <div key={index} className="team-card relative bg-white p-4 rounded-lg shadow-md overflow-hidden">
                        <img
                            src={team.image}
                            alt={team.name}
                            className="w-full h-48 object-cover rounded-lg"
                        />
                        <h3 className="text-xl font-bold mt-4 text-center">{team.name}</h3>

                        {/* Hover Effect - Show Players, Coach, Analyst */}
                        <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-100 rounded-lg">
                            {team.players.map((player, idx) => (
                                <p key={idx} className="text-white text-lg">
                                    {player.role}: <Link to={player.link} className="hover:underline">{player.name}</Link>
                                </p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};





export default Teams;
