import React from 'react';
import LineupCard from '../components/LineupCard'; // Make sure to adjust the import path as necessary

const Lineup = () => {
    const lineup = [
        {
            teamName: 'Team Soul',
            members: [
                { name: 'Mortal', role: 'IGL' },
                { name: 'Viper', role: 'Support' },
                { name: 'Jonathan', role: 'Assault' },
                { name: 'Dynamo', role: 'Scout' },
                { name: 'Scout', role: 'Sniper' },
                { name: 'Warlock', role: 'Analyst' },
                { name: 'Specter', role: 'Coach' },
            ],
        },
        {
            teamName: 'GodLike Esports',
            members: [
                { name: 'Ninja', role: 'IGL' },
                { name: 'Psycho', role: 'Support' },
                { name: 'Shadow', role: 'Assault' },
                { name: 'Rex', role: 'Scout' },
                { name: 'Zeus', role: 'Sniper' },
                { name: 'Chakra', role: 'Analyst' },
                { name: 'Zodiac', role: 'Coach' },
            ],
        },
        {
            teamName: 'Orange Rock',
            members: [
                { name: 'Mavi', role: 'IGL' },
                { name: 'Gill', role: 'Support' },
                { name: 'Daljit', role: 'Sniper' },
                { name: 'Viru', role: 'Scout' },
                { name: 'Anto', role: 'Assault' },
                { name: 'Dagger', role: 'Analyst' },
                { name: 'Challenger', role: 'Coach' },
            ],
        },
        {
            teamName: 'TSM Entity',
            members: [
                { name: 'ClutchGod', role: 'IGL' },
                { name: 'ZGod', role: 'Support' },
                { name: 'Neyoo', role: 'Assault' },
                { name: 'Ghatak', role: 'Scout' },
                { name: 'Omega', role: 'Sniper' },
                { name: 'Glory', role: 'Analyst' },
                { name: 'Viper', role: 'Coach' },
            ],
        },
        {
            teamName: 'Nova Esports',
            members: [
                { name: 'Paraboy', role: 'IGL' },
                { name: 'Coolboy', role: 'Support' },
                { name: 'Order', role: 'Assault' },
                { name: 'Jimmy', role: 'Scout' },
                { name: 'King', role: 'Sniper' },
                { name: 'Guru', role: 'Analyst' },
                { name: 'Blaze', role: 'Coach' },
            ],
        },
        {
            teamName: 'Bigetron RA',
            members: [
                { name: 'Zuxxy', role: 'IGL' },
                { name: 'Luxxy', role: 'Sniper' },
                { name: 'Ryzen', role: 'Assault' },
                { name: 'Microboy', role: 'Support' },
                { name: 'Liquid', role: 'Scout' },
                { name: 'Drago', role: 'Analyst' },
                { name: 'Flame', role: 'Coach' },
            ],
        },
        {
            teamName: 'Alpha 7 Esports',
            members: [
                { name: 'Carrilho', role: 'Assault' },
                { name: 'Senab', role: 'Scout' },
                { name: 'Revo', role: 'Sniper' },
                { name: 'Mythic', role: 'Support' },
                { name: 'Law', role: 'IGL' },
                { name: 'Blade', role: 'Analyst' },
                { name: 'Steel', role: 'Coach' },
            ],
        },
        {
            teamName: '4AM',
            members: [
                { name: '33Svan', role: 'IGL' },
                { name: 'Suk', role: 'Assault' },
                { name: 'Forever', role: 'Scout' },
                { name: 'Cool', role: 'Sniper' },
                { name: 'KingZ', role: 'Support' },
                { name: 'Storm', role: 'Analyst' },
                { name: 'Razor', role: 'Coach' },
            ],
        },
        {
            teamName: 'Kinetic Esports',
            members: [
                { name: 'Tensa', role: 'IGL' },
                { name: 'Evil', role: 'Support' },
                { name: 'Blaze', role: 'Assault' },
                { name: 'Raven', role: 'Scout' },
                { name: 'Dagger', role: 'Sniper' },
                { name: 'Edge', role: 'Analyst' },
                { name: 'Iron', role: 'Coach' },
            ],
        },
        {
            teamName: 'Black Dragons',
            members: [
                { name: 'Carron', role: 'IGL' },
                { name: 'Victor', role: 'Support' },
                { name: 'Storm', role: 'Assault' },
                { name: 'Leo', role: 'Scout' },
                { name: 'Mamba', role: 'Sniper' },
                { name: 'Specter', role: 'Analyst' },
                { name: 'Rage', role: 'Coach' },
            ],
        },
    ];


    return (
        <div className="max-w-7xl mx-auto p-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Team Lineup</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {lineup.map((team, index) => (
                    <LineupCard key={index} teamName={team.teamName} members={team.members} />
                ))}
            </div>
        </div>
    );
};

export default Lineup;
