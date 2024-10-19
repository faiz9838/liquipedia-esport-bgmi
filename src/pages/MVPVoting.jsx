import React, { useState } from 'react';

const MVPVoting = () => {
    const [votes, setVotes] = useState({ player1: 0, player2: 0 });

    const handleVote = (player) => {
        setVotes((prevVotes) => ({
            ...prevVotes,
            [player]: prevVotes[player] + 1,
        }));
    };

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Most Fanbase</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold">Mortal</h3>
                    <button
                        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-700"
                        onClick={() => handleVote('player1')}
                    >
                        Vote for Mortal
                    </button>
                    <p className="mt-4">Votes: {votes.player1}</p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold">Jonathan</h3>
                    <button
                        className="bg-green-500 text-white px-4 py-2 mt-4 rounded hover:bg-green-700"
                        onClick={() => handleVote('player2')}
                    >
                        Vote for Jonathan
                    </button>
                    <p className="mt-4">Votes: {votes.player2}</p>
                </div>
            </div>
        </div>
    );
};

export default MVPVoting;
