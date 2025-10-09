import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen px-4 pt-20">
      <div className="container mx-auto py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-neon-blue">
          Get in Touch
        </h1>

        <div className="max-w-xl mx-auto mb-12">
          <p className="text-lg text-gray-300 text-center mb-6">
            Have a project in mind or just want to say hello?
          </p>
          <form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact" />
  <p>
    <label>Name: <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Connect with me</h2>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl transition-transform duration-300 hover:scale-125 hover:text-neon-blue"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl transition-transform duration-300 hover:scale-125 hover:text-neon-blue"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/your-username"
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