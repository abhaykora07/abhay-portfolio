import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useSearchParams } from 'react-router-dom';

const ContactPage = () => {
  const [searchParams] = useSearchParams();
  const showSuccessMessage = searchParams.get('submit');

  return (
    <div className="bg-gray-900 text-white min-h-screen px-4 pt-20">
      <div className="container mx-auto py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-neon-blue">
          Get in Touch
        </h1>

        {/* Display the success message if the URL has the 'submit=true' parameter */}
        {showSuccessMessage && (
          <div className="max-w-xl mx-auto mb-12 p-4 rounded-lg bg-green-500 text-white text-center">
            <p className="text-lg font-semibold">Thank you for your message! We'll be in touch soon.</p>
          </div>
        )}

        <div className="max-w-xl mx-auto mb-12">
          <p className="text-lg text-gray-300 text-center mb-6">
            Have a project in mind or just want to say hello?
          </p>
          <form
            name="contact"
            method="POST"
            action="https://script.google.com/macros/s/AKfycbyNio-AIXBer5Xu9XAa_IVjKjQUXrp1q4VZ5iUg6RDAQ-GXjwUGXe0cA9Gk9IO3ZRcPzA/exec" // PASTE YOUR URL HERE
            className="space-y-4"
          >
            {/* The rest of your form content remains the same */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-neon-blue"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-neon-blue"
              required
            />
            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-neon-blue"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full px-6 py-3 rounded-lg bg-neon-blue text-white font-semibold transition-transform duration-300 hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Connect with me</h2>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/abhaykora07"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl transition-transform duration-300 hover:scale-125 hover:text-neon-blue"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/abhaykora/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl transition-transform duration-300 hover:scale-125 hover:text-neon-blue"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/abhaykora_01/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl transition-transform duration-300 hover:scale-125 hover:text-neon-blue"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;