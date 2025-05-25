import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar />
      </header>
      <main className="flex-grow container mx-auto px-4 py-6">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
