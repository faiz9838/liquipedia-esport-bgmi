import React from 'react';

const Overview = () => {
    return (
        <div className="max-w-7xl mx-auto py-8">
            <h2 className="text-3xl font-bold mb-4">BGMI Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold">Top Teams</h3>
                    <p>Explore the best BGMI teams and their achievements.</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold">Top Players</h3>
                    <p>Check out top players and their stats.</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold">Upcoming Tournaments</h3>
                    <p>Stay updated with upcoming BGMI tournaments.</p>
                </div>
            </div>
        </div>
    );
};

export default Overview;
