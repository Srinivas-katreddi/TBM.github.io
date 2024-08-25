import React, { useState } from 'react';
import Header from './components/Header'; // Import the Header component
import './App.css'; // General application styles
import Home from './components/Home';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      <Header isMenuOpen={isMenuOpen} onMenuToggle={handleMenuToggle} />
      <Home/>
    </div>
  );
};

export default App;
