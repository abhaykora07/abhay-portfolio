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
          <div className="w-full">
            <iframe
              src="https://tally.so/embed/mOWD7K?alignLeft=1&hideTitle=1&dynamicHeight=1&formEventsForwarding=1https://tally.so/embed/mOWD7K?alignLeft=1&hideTitle=1&dynamicHeight=1&formEventsForwarding=1" // Replace with the URL from your embed code
              width="100%"
              height="550" // You may need to adjust the heightgit
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              title="Contact Form"
              className="rounded-lg" // Optional: add styling
            ></iframe>
          </div>
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