import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

export default function MainLayout({ children, showNavbarFooter = true }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        {showNavbarFooter && <Navbar />}
      </header>
      <main className="flex-grow w-full">
        {children}
      </main>
      <footer>
        {showNavbarFooter && <Footer />}
      </footer>
    </div>
  );
}
