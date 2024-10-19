import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8 mt-10">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
                <div className="flex justify-center space-x-6 mb-4">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                        <FaFacebookF className="w-6 h-6" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                        <FaTwitter className="w-6 h-6" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
                        <FaInstagram className="w-6 h-6" />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                        <FaLinkedin className="w-6 h-6" />
                    </a>
                </div>
                <div className="mb-6">
                    <h4 className="text-md font-semibold mb-2">Subscribe to Our Newsletter</h4>
                    <form className="flex justify-center">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="px-4 py-2 rounded-l-md focus:outline-none"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
                <p className="text-sm">
                    © 2024 BGMI Hub. All Rights Reserved.
                </p>
                <div className="mt-4">
                    <a href="/privacy-policy" className="text-gray-400 hover:text-gray-200 mr-4">Privacy Policy</a>
                    <a href="/terms-of-service" className="text-gray-400 hover:text-gray-200">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
