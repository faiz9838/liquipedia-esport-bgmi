import React from 'react';
import { Link } from 'react-router-dom';

const PlayerCard = ({ name, kills, rank, img }) => {
    return (
        <Link
            to={`/players/${name.toLowerCase()}`} // Route to player detail
            className="relative flex justify-center bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 h-60"
        >
            {/* Image section */}
            <img
                className="w-44 h-60 object-cover transition-transform duration-300"
                src={img}
                alt={name}
            />

            {/* Overlay effect for hover */}
            <div className="absolute inset-0 transition-opacity duration-300 flex flex-col items-center justify-center text-white bg-gray-900 bg-opacity-75 opacity-0 hover:opacity-100">
                <h3 className="text-xl font-bold mt-2 text-center">{name}</h3>
                <p className="text-lg">Kills: {kills}</p>
                <p className="text-lg">Rank: {rank}</p>
            </div>
        </Link>
    );
};

export default PlayerCard;
