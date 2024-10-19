import React from 'react';

const LineupCard = ({ teamName, members }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 mb-4">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{teamName}</h3>
            <ul className="space-y-2">
                {members.map((player, index) => (
                    <li key={index} className="flex justify-between items-center bg-gray-100 p-2 rounded-md">
                        <span className="font-bold text-gray-800">{player.name}</span>
                        <span className="text-gray-600">{player.role}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LineupCard;
