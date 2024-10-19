import React, { useState } from 'react';

const Voting = () => {
    const [votes, setVotes] = useState({ player1: 0, player2: 0 });

    const handleVote = (player) => {
        setVotes(prevVotes => ({
            ...prevVotes,
            [player]: prevVotes[player] + 1
        }));
    };

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Vote for Your MVP</h2>
            <div className="flex justify-around">
                <div className="bg-white shadow-md p-4 rounded-lg text-center">
                    <h3 className="text-xl font-bold">Player 1</h3>
                    <button className="mt-2 p-2 bg-blue-500 text-white rounded" onClick={() => handleVote('player1')}>Vote</button>
                    <p className="mt-2">Votes: {votes.player1}</p>
                </div>
                <div className="bg-white shadow-md p-4 rounded-lg text-center">
                    <h3 className="text-xl font-bold">Player 2</h3>
                    <button className="mt-2 p-2 bg-green-500 text-white rounded" onClick={() => handleVote('player2')}>Vote</button>
                    <p className="mt-2">Votes: {votes.player2}</p>
                </div>
            </div>
        </div>
    );
};

export default Voting;
