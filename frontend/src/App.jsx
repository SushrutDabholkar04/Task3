// frontend/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';

import ContactUsPage from './pages/ContactUsPage';
import PartnersPage from './pages/PartnersPage';
import InformationPage from './pages/InformationPage';
import WhyChooseUsPage from './pages/WhyChooseUsPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CheckoutPage from './pages/CheckoutPage';
// Import useAuthContext to check user's login status
import { useAuthContext } from './hooks/useAuthContext'; 

function App() {
  // Get the user state from the AuthContext
  const { user } = useAuthContext();

  return (
    <Router>
      <Navbar />
      <main> 
        <Routes>
          {/* Public Routes - Always accessible */}
          <Route path="/" element={<HomePage />} />

          {/* Authentication Routes - Redirect if user is logged in */}
          {/* If user exists, trying to go to /login or /signup will redirect to homepage */}
          <Route 
            path="/login" 
            element={user ? <Navigate to="/" /> : <Login />} 
          />
          <Route 
            path="/signup" 
            element={user ? <Navigate to="/" /> : <Signup />} 
          />

          {/* Protected Routes - Only accessible if user is logged in */}
          {/* If no user, attempting to access these routes will redirect to login page */}
          <Route 
            path="/products" 
            element={user ? <ProductsPage /> : <Navigate to="/login" />} 
          />
      
          <Route 
            path="/contact" 
            element={user ? <ContactUsPage /> : <Navigate to="/login" />} 
          /> 
          <Route 
            path="/partners" 
            element={user ? <PartnersPage /> : <Navigate to="/login" />} 
          /> 
          <Route 
            path="/information" 
            element={user ? <InformationPage /> : <Navigate to="/login" />} 
          /> 
          <Route 
            path="/why-choose-us" 
            element={user ? <WhyChooseUsPage /> : <Navigate to="/login" />} 
          /> 
           <Route 
            path="/checkout" 
            element={user ? <CheckoutPage /> : <Navigate to="/login" />} 
          /> 
          {/* Optional: Add a catch-all route for 404 Not Found if needed */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;