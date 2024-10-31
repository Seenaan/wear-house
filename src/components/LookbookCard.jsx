import React, { useState } from 'react';

const LookbookCard = ({ lookbook, onLike, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(lookbook.title);
  const [newImageUrl, setNewImageUrl] = useState(lookbook.items.length > 0 ? lookbook.items[0].imageUrl : ''); // State for new image URL
  const [selectedImage, setSelectedImage] = useState(null);

  const handleEditClick = () => setIsEditing(true);

  const handleSaveClick = () => {
    // Update the lookbook with the new title and image URL
    onEdit(lookbook.id, { title: newTitle, items: [{ imageUrl: newImageUrl }] });
    setIsEditing(false);
  };

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="lookbook-card">
      {isEditing ? (
        <div>
          <input 
            type="text" 
            value={newTitle} 
            onChange={(e) => setNewTitle(e.target.value)} 
            placeholder="Edit title"
          />
          <input 
            type="text" 
            value={newImageUrl} 
            onChange={(e) => setNewImageUrl(e.target.value)} 
            placeholder="Edit image URL"
          />
          <button onClick={handleSaveClick}>Save</button>
        </div>
      ) : (
        <h3>{lookbook.title}</h3>
      )}
      
      <div className="lookbook-images">
        {lookbook.items.map((item, index) => (
          <div key={index} className="item-box">
            <img 
              src={item.imageUrl} 
              alt={`Lookbook item ${index + 1}`} 
              style={{ maxWidth: '100px', height: 'auto', cursor: 'pointer' }} 
              onClick={() => handleImageClick(item.imageUrl)} 
            />
          </div>
        ))}
      </div>

      <p>Likes: {lookbook.likes}</p>
      <button onClick={() => onLike(lookbook.id)}>Like</button>
      <button onClick={handleEditClick}>Edit</button>
      <button onClick={() => onDelete(lookbook.id)}>Delete</button>

      {selectedImage && (
        <div className="image-viewer" onClick={handleCloseModal}>
          <img src={selectedImage} alt="Enlarged" style={{ maxWidth: '80%', maxHeight: '80%' }} />
        </div>
      )}
    </div>
  );
};

export default LookbookCard;
