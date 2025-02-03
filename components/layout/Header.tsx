import React from 'react';

export default function Header() {
  return (
    <header className="w-full p-4 text-white bg-gray-900">
      <nav className="flex justify-between max-w-6xl mx-auto">
        <h1 className="text-xl font-bold">My Brand</h1>
        <ul className="flex space-x-4">
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#services" className="hover:underline">Services</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
