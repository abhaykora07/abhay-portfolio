import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen px-4 pt-20">
      <div className="container mx-auto py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-neon-blue">
          Get in Touch
        </h1>

        {/* Contact Form with Netlify Attributes */}
        <div className="max-w-xl mx-auto mb-12">
          <p className="text-lg text-gray-300 text-center mb-6">
            Have a project in mind or just want to say hello?
          </p>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="space-y-4"
          >
            {/* The form name field (required for Netlify) */}
            <input type="hidden" name="form-name" value="contact" />
            
            {/* 1. HONEYPOT FIELD FOR SPAM PROTECTION (Hidden with Tailwind) */}
            <p className="hidden">
              <label>Don’t fill this out if you’re a human: <input name="bot-field" /></label>
            </p>
            {/* ------------------------------------------------------------- */}

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

        {/* Social Links */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Connect with me</h2>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/your-username" // Replace with your GitHub URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl transition-transform duration-300 hover:scale-125 hover:text-neon-blue"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/your-username" // Replace with your LinkedIn URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl transition-transform duration-300 hover:scale-125 hover:text-neon-blue"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/your-username" // Replace with your Instagram URL
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