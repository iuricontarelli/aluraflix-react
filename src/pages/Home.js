import React, { useState, useEffect } from 'react';
import VideoItem from '../components/VideoItem';
import EditVideoModal from '../components/EditVideoModal';
import './Home.css';

function Home() {
  const [videos, setVideos] = useState([]);
  const [editingVideo, setEditingVideo] = useState(null);

  useEffect(() => {
    const storedVideos = JSON.parse(localStorage.getItem('videos')) || [];
    setVideos(storedVideos);
  }, []);

  const handleDeleteVideo = (id) => {
    const updatedVideos = videos.filter((video) => video.id !== id);
    setVideos(updatedVideos);
    localStorage.setItem('videos', JSON.stringify(updatedVideos));
  };

  const handleEditVideo = (video) => {
    setEditingVideo(video);
  };

  const handleSaveEdit = (updatedVideo) => {
    const updatedVideos = videos.map((video) => (video.id === updatedVideo.id ? updatedVideo : video));
    setVideos(updatedVideos);
    localStorage.setItem('videos', JSON.stringify(updatedVideos));
    setEditingVideo(null);
  };

  const handleCloseModal = () => {
    setEditingVideo(null);
  };

  return (
    <div className="home">
      <div className="video-list">
        {videos.map((video) => (
          <VideoItem
            key={video.id}
            video={video}
            onEdit={() => handleEditVideo(video)}
            onDelete={() => handleDeleteVideo(video.id)}
          />
        ))}
      </div>
      {editingVideo && (
        <EditVideoModal
          video={editingVideo}
          onSave={handleSaveEdit}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default Home;
