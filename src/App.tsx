import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ProductListPage from '@/pages/ProductListPage';
import ProductDetailPage from '@/pages/ProductDetailPage';
import Layout from '@/components/Layout';
import WelcomeScreen from '@/components/welcome-screen';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showWelcome && <WelcomeScreen />}
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ProductListPage />} />
          <Route path="/product/:code" element={<ProductDetailPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;