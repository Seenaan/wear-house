import React, { useEffect } from 'react';
import LookbookCard from './LookbookCard';

const LookbookList = ({ lookbooks, onLike, onEdit, onDelete }) => {
  // Load lookbooks from localStorage on component mount
  useEffect(() => {
    const savedLookbooks = localStorage.getItem('lookbooks');
    if (savedLookbooks) {
      // Assuming the lookbooks prop comes from the App component,
      // You might not need to set them here.
    }
  }, []);

  // Save lookbooks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('lookbooks', JSON.stringify(lookbooks));
  }, [lookbooks]);

  return (
    <div className="lookbook-list">
      {lookbooks.length > 0 ? (
        lookbooks.map(lookbook => (
          <LookbookCard
            key={lookbook.id}
            lookbook={lookbook}
            onLike={onLike}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))
      ) : (
        <p>No lookbooks available.</p>
      )}
    </div>
  );
};

export default LookbookList;
