import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import Orders from './pages/Orders';
import Admin from './pages/Admin';
import About from './pages/About';

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar
          cartOpen={cartOpen}
          setCartOpen={setCartOpen}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        
        <CartDrawer cartOpen={cartOpen} setCartOpen={setCartOpen} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 2000,
            style: {
              background: darkMode ? '#1f2937' : '#ffffff',
              color: darkMode ? '#ffffff' : '#1f2937',
            },
          }}
        />
      </div>
    </Router>
  );
}

export default App;
