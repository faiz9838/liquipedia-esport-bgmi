import React from 'react';

const TeamCard = ({ name, achievements, img, additionalInfo }) => {
    return (
        <div className="bg-white shadow-md rounded-lg flex flex-col items-center p-4 relative group"> {/* Group class for hover */}
            <img
                className='w-32 h-32 object-cover rounded-full transition-transform duration-300 group-hover:scale-105' // Added scaling effect on hover
                src={img}
                alt={`${name} logo`}
            />
            <h3 className="text-xl font-bold mt-2">{name}</h3>
            <p className="text-center mt-1">{achievements}</p>

            {/* Hidden content on hover */}
            <div className="absolute inset-0 bg-black bg-opacity-75 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg p-4">
                <div>
                    <h4 className="text-lg font-bold mb-2">More Info</h4>
                    <p>{additionalInfo}</p> {/* Extra team data */}
                </div>
            </div>
        </div>
    );
};

export default TeamCard;
