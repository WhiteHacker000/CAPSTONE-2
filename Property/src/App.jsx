import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import PropertyListing from './components/Property_Listing/Property_Listing';
import PropertyDetail from './components/Property_Detail/Property_Detail';
import Agents from './components/Agents/Agents';
import Notifications from './components/Notification/Notification';
import Footer from './components/Footer/Footer';
import { AuthProvider } from './contexts/AuthContext';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/properties" element={<PropertyListing />} />
          <Route path="/properties/:id" element={<PropertyDetail />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;