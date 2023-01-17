import React from 'react' 
import './App.css';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage'
import AboutUs from './Components/AboutUs'
import ProductsPage from './Components/ProductsPage'
import NewsPage from './Components/NewsPage'
import ContactUs from './Components/ContactUs'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <AboutUs />
      <ProductsPage />
      <NewsPage />
      <ContactUs />
      <Footer />
    </>
  );
}




export default App;
