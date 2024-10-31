import React, { useState } from 'react';
import axios from 'axios';

const CreateLookbook = ({ onAddLookbook }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [items, setItems] = useState([]);
  const [lookbookTitle, setLookbookTitle] = useState('');
  const [lookbookItems, setLookbookItems] = useState([]);
  
  const UNSPLASH_ACCESS_KEY = '6P-Nx5RTQTiwt5dcTFnhqY7XV-xcgXlM7WYM24OiUbM';

  const handleSearch = async () => {
    if (!searchTerm) return;

    try {
      const response = await axios.get(`https://api.unsplash.com/search/photos`, {
        params: {
          query: searchTerm,
          client_id: UNSPLASH_ACCESS_KEY,
        },
      });
      const fetchedItems = response.data.results.map(item => ({
        id: item.id,
        name: item.description || item.alt_description || 'Image',
        imageUrl: item.urls.small,
        likes: 0,
        review: '',
      }));

      setItems(fetchedItems);
    } catch (error) {
      console.error("Error fetching data from Unsplash:", error);
    }
  };

  const addToLookbook = (item) => {
    if (!lookbookItems.find(i => i.id === item.id)) {
      setLookbookItems([...lookbookItems, item]);
    }
  };

  const saveLookbook = () => {
    if (lookbookTitle && lookbookItems.length > 0) {
      const newLookbook = {
        id: Date.now(),
        title: lookbookTitle,
        items: lookbookItems,
        likes: 0,
        rating: 0,
      };
      onAddLookbook(newLookbook);
      setLookbookTitle('');
      setLookbookItems([]);
    } else {
      alert('Please enter a title and add at least one item.');
    }
  };

  return (
    <div className="create-lookbook-container">
      <h2>Create a New Lookbook</h2>
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Lookbook Title"
          value={lookbookTitle}
          onChange={(e) => setLookbookTitle(e.target.value)}
          className="title-input"
        />
        <input
          type="text"
          placeholder="Search for images..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">Search</button>
      </div>
      
      <div className="search-results">
        {items.map(item => (
          <div key={item.id} className="item-card">
            <img src={item.imageUrl} alt={item.name} />
            <h3>{item.name}</h3>
            <button onClick={() => addToLookbook(item)}>Add to Lookbook</button>
          </div>
        ))}
      </div>
      
      <div className="lookbook-items">
        {lookbookItems.map(item => (
          <div key={item.id} className="item-card">
            <img src={item.imageUrl} alt={item.name} style={{ maxWidth: '100px' }} />
          </div>
        ))}
      </div>

      <button onClick={saveLookbook} className="save-button">Save Lookbook</button>
    </div>
  );
};

export default CreateLookbook;
