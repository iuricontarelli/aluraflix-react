import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NewVideoForm.css';

function NewVideoForm() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleAddVideo = () => {
    const newVideo = {
      id: Date.now(),
      title,
      category,
      image,
      url,
      description,
    };
    const storedVideos = JSON.parse(localStorage.getItem('videos')) || [];
    const updatedVideos = [...storedVideos, newVideo];
    localStorage.setItem('videos', JSON.stringify(updatedVideos));
    navigate('/');
  };

  return (
    <div className="new-video-form">
      <h2>Novo Vídeo</h2>
      <div className="new-form-group">
        <label>Título</label>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          placeholder="Digite o título do vídeo" 
        />
      </div>
      <div className="new-form-group">
        <label>Categoria</label>
        <select 
          value={category} 
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Selecione uma categoria"
        >
          <option value="">Selecione uma categoria</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
        </select>
      </div>
      <div className="new-form-group">
        <label>Imagem</label>
        <input 
          type="text" 
          value={image} 
          onChange={(e) => setImage(e.target.value)} 
          placeholder="Digite o link da imagem"
        />
      </div>
      <div className="new-form-group">
        <label>Vídeo</label>
        <input 
          type="text" 
          value={url} 
          onChange={(e) => setUrl(e.target.value)} 
          placeholder="Digite o link do vídeo"
        />
      </div>
      <div className="new-form-group">
        <label>Descrição</label>
        <textarea 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          placeholder="Digite a descrição"
        ></textarea>
      </div>
      <button onClick={handleAddVideo} className="new-form-button">Guardar</button>
      <button onClick={() => navigate('/')} className="new-form-button">Cancelar</button>
    </div>
  );
}

export default NewVideoForm;
