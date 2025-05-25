import React from 'react';
import ReactDOM from 'react-dom/client';
import '../css/app.css'; // Tailwind
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout.jsx';
import Home from './pages/Home.jsx';
import DashboardTeknisi from './pages/dashboardteknisi/DashboardTeknisi.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout showNavbarFooter={true}><Home /></MainLayout>} />
        <Route path="/dashboardteknisi" element={<MainLayout showNavbarFooter={false}><DashboardTeknisi /></MainLayout>} />
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
