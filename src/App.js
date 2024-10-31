import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CreateLookbook from './components/CreateLookbook';
import LookbookGallery from './components/LookbookGallery';
import About from './components/About';
import Contact from './components/Contact';
import '../src/index.css';
import Header from './components/Header';

function App() {
  const [lookbooks, setLookbooks] = useState([]);

  // Load lookbooks from localStorage once when the component mounts
  useEffect(() => {
    const savedLookbooks = JSON.parse(localStorage.getItem('lookbooks'));
    if (savedLookbooks) {
      setLookbooks(savedLookbooks);
    }
  }, []);

  // Save lookbooks to localStorage whenever lookbooks array changes
  useEffect(() => {
    if (lookbooks.length > 0) {
      localStorage.setItem('lookbooks', JSON.stringify(lookbooks));
    }
  }, [lookbooks]);

  const handleAddLookbook = (newLookbook) => {
    const lookbookWithId = { ...newLookbook, id: Date.now() }; // Assign a unique id
    setLookbooks([...lookbooks, lookbookWithId]);
  };

  const handleLike = (id) => {
    setLookbooks((prevLookbooks) =>
      prevLookbooks.map((lookbook) =>
        lookbook.id === id ? { ...lookbook, likes: (lookbook.likes || 0) + 1 } : lookbook
      )
    );
  };

  const handleEdit = (id, updatedData) => {
    setLookbooks((prevLookbooks) =>
      prevLookbooks.map((lookbook) =>
        lookbook.id === id ? { ...lookbook, ...updatedData } : lookbook
      )
    );
  };

  const handleDelete = (id) => {
    setLookbooks((prevLookbooks) => prevLookbooks.filter(lookbook => lookbook.id !== id));
  };

  return (
    <Router>
      <Header text="Wear-House" about="About" contact="Contact" />
      <div className="fixed-nav">
        <Link to="/create-lookbook" className="button-link">Create Lookbook</Link>
        <Link to="/gallery" className="button-link">View Lookbook Gallery</Link>
      </div>
      <div className="App">
        <video autoPlay loop muted playsInline className="videoBackground">
          <source src="/smoke.mp4" type="video/mp4" />
        </video>
        <div className="content">
          <Routes>
            <Route
              path="/create-lookbook"
              element={<CreateLookbook onAddLookbook={handleAddLookbook} />}
            />
            <Route
              path="/gallery"
              element={<LookbookGallery
                lookbooks={lookbooks}
                onLike={handleLike}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
