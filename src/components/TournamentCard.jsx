import React from 'react';

const TournamentCard = ({ name, date, prizePool }) => {
    return (
        <div className="bg-white shadow-md p-4 rounded-lg">
            <h3 className="text-xl font-bold">{name}</h3>
            <p>Date: {date}</p>
            <p>Prize Pool: {prizePool}</p>
        </div>
    );
};

export default TournamentCard;
