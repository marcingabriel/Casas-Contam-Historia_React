// Footer.jsx

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-800 absolute  left-0 w-full">
      <div className="container mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024 <a href="https://flowbite.com/" className="hover:underline">Marcio Gabriel</a>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">Sobre</a>
          </li>
          <li>
            <a href="#" className="hover:underline">Contato</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
