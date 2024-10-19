import { motion } from 'framer-motion';
import React from 'react';


const HeroSection = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative bg-cover bg-center h-screen flex items-center justify-center text-white"
            style={{ backgroundImage: `url(${require(`../background.jpg`)})` }} // Set the image path here
        >
            {/* Semi-transparent overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            <div className="relative text-center z-10">
                <motion.h1
                    className="text-6xl md:text-7xl font-extrabold mb-4 leading-tight"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    Welcome to <span className="text-blue-400">Liquimedia</span>
                </motion.h1>
                <motion.p
                    className="text-lg md:text-2xl mb-6 max-w-2xl mx-auto leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    Track your favorite teams, players, and tournaments in BGMI Esports.
                </motion.p>
                <motion.button
                    className="bg-blue-500 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-400 transition duration-300 ease-in-out transform hover:scale-105"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Explore Now
                </motion.button>
            </div>
        </motion.div>

    );
};

export default HeroSection;
