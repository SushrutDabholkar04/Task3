// frontend/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ContactUsPage from './pages/ContactUsPage';
import PartnersPage from './pages/PartnersPage';
import InformationPage from './pages/InformationPage';
import WhyChooseUsPage from './pages/WhyChooseUsPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
// Keep these commented out as per your request
// import BasicsPage from './pages/information/BasicsPage';
// import BlogsPage from './pages/information/BlogsPage';
// import DeploymentStepsPage from './pages/information/DeploymentStepsPage';
// import CaseStudiesPage from './pages/information/CaseStudiesPage';
// import WhyChooseUsPage from './pages/information/WhyChooseUsPage';


function App() {
  return (
    <Router>
      <Navbar />
      <main> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/products" element={<ProductsPage />} />
          {/* Ensure you have these pages created in frontend/src/pages/ */}
          <Route path="/products/:productId" element={<ProductDetailPage />} /> {/* UNCOMMENT THIS LINE */}
          <Route path="/contact" element={<ContactUsPage />} />             {/* UNCOMMENT THIS LINE (and fix typo if exists) */}
          <Route path="/partners" element={<PartnersPage />} />             {/* UNCOMMENT THIS LINE */}
          <Route path="/information" element={<InformationPage />} /> 
          <Route path="/why-choose-us" element={<WhyChooseUsPage />} />        {/* UNCOMMENT THIS LINE */}
          
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;