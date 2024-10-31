import React from 'react';
import LookbookCard from './LookbookCard';

const LookbookGallery = ({ lookbooks, onLike, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Lookbook Gallery</h2>
      {lookbooks.length > 0 ? (
        lookbooks.map((lookbook) => (
          <LookbookCard
            key={lookbook.id}
            lookbook={lookbook}
            onLike={onLike}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))
      ) : (
        <p>No lookbooks created yet. Start by adding some!</p>
      )}
    </div>
  );
};

export default LookbookGallery;

