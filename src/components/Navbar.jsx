import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // State to manage the menu open/close

    const toggleMenu = () => {
        setIsOpen(!isOpen); // Toggle the menu state
    };

    return (
        <nav className="bg-gray-800 text-white py-4">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                <div className="text-2xl font-bold">Liquimedia</div>
                <div className="hidden md:flex space-x-6"> {/* Show on larger screens */}
                    <ul className="flex space-x-6">
                        <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
                        <li><Link to="/teams" className="hover:text-gray-300">Teams</Link></li>
                        <li><Link to="/players" className="hover:text-gray-300">Players</Link></li>
                        <li><Link to="/lineup" className="hover:text-gray-300">Lineup</Link></li>
                        <li><Link to="/tournaments" className="hover:text-gray-300">Tournaments</Link></li>
                        <li><Link to="/mvp-voting" className="hover:text-gray-300">MVP Voting</Link></li>
                        <li><Link to="/player-achievements" className="hover:text-gray-300">Achievements</Link></li>
                        <li><Link to="/stats" className="hover:text-gray-300">Stats</Link></li>
                        <li><Link to="/upcoming-tournaments" className="hover:text-gray-300">Upcoming Tournaments</Link></li>
                    </ul>
                </div>
                {/* Hamburger Icon */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        {isOpen ? (
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="md:hidden py-4">
                    <ul className="flex flex-col space-y-2 px-4 py-2 bg-gray">
                        <li><Link to="/" className="hover:text-gray-300" onClick={toggleMenu}>Home</Link></li>
                        <li><Link to="/teams" className="hover:text-gray-300" onClick={toggleMenu}>Teams</Link></li>
                        <li><Link to="/players" className="hover:text-gray-300" onClick={toggleMenu}>Players</Link></li>
                        <li><Link to="/lineup" className="hover:text-gray-300" onClick={toggleMenu}>Lineup</Link></li>
                        <li><Link to="/tournaments" className="hover:text-gray-300" onClick={toggleMenu}>Tournaments</Link></li>
                        <li><Link to="/mvp-voting" className="hover:text-gray-300" onClick={toggleMenu}>MVP Voting</Link></li>
                        <li><Link to="/player-achievements" className="hover:text-gray-300" onClick={toggleMenu}>Achievements</Link></li>
                        <li><Link to="/stats" className="hover:text-gray-300" onClick={toggleMenu}>Stats</Link></li>
                        <li><Link to="/upcoming-tournaments" className="hover:text-gray-300" onClick={toggleMenu}>Upcoming Tournaments</Link></li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
