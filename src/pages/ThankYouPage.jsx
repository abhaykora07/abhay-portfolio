import React from 'react';
import { Link } from 'react-router-dom';

const ThankYouPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Thank You!</h1>
      <p className="text-lg md:text-xl max-w-2xl mb-8">Your message has been sent successfully. We'll be in touch soon.</p>
      <Link to="/" className="px-6 py-3 rounded-lg bg-neon-blue text-white font-semibold transition-transform duration-300 hover:scale-105">
        Go Back to Home
      </Link>
    </div>
  );
};

export default ThankYouPage;