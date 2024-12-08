import React from 'react';
import { Instagram, Twitter, Youtube, Facebook, Linkedin} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 bg-opacity-50 text-white my-2 py-4">
      <div className="container mx-auto text-center">
        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://x.com/ecellnita"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition duration-200"
          >
            <Twitter size={30} />
          </a>
          <a
            href="https://www.instagram.com/ecellnita/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-400 transition duration-200"
          >
            <Instagram size={30} />
          </a>
          <a
            href="https://www.facebook.com/ecellnita"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400 transition duration-200"
          >
            <Facebook size={30} />
          </a>
          <a
            href="https://www.youtube.com/@e-cellnita6756"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:text-red-400 transition duration-200"
          >
            <Youtube size={30} />
          </a>
          <a
            href="https://www.linkedin.com/company/ecellnita"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-500 transition duration-200"
          >
            <Linkedin size={30} />
          </a>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} @ecellnita. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;