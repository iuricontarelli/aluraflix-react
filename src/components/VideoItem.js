import React from 'react';
import './VideoItem.css';

function VideoItem({ video, onEdit, onDelete }) {
  return (
    <div className="video-card">
      <a href={video.url} target="_blank" rel="noopener noreferrer">
        <img src={video.image} alt={video.title} className="video-image" />
      </a>
      <div className="video-info">
        <h3 className="video-title" title={video.title}>{video.title}</h3>
        <p className="video-description" title={video.description}>{video.description}</p>
        <a href={video.url} target="_blank" rel="noopener noreferrer" className="video-link">Assistir</a>
        <div className="video-actions">
          <button onClick={onEdit} className="video-edit-button">Editar</button>
          <button onClick={onDelete} className="video-delete-button">Remover</button>
        </div>
      </div>
    </div>
  );
}

export default VideoItem;
