import React, { useState } from 'react';
import './EditVideoModal.css';

function EditVideoModal({ video, onSave, onClose }) {
  const [title, setTitle] = useState(video.title);
  const [category, setCategory] = useState(video.category);
  const [image, setImage] = useState(video.image);
  const [url, setUrl] = useState(video.url);
  const [description, setDescription] = useState(video.description);

  const handleSave = () => {
    const updatedVideo = { ...video, title, category, image, url, description };
    onSave(updatedVideo);
  };

  return (
    <div className="edit-modal">
      <div className="edit-modal-content">
        <span className="edit-close" onClick={onClose}>&times;</span>
        <h2>Editar Vídeo</h2>
        <div className="edit-form-group">
          <label>Título</label>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            placeholder="Digite o título do vídeo" 
          />
        </div>
        <div className="edit-form-group">
          <label>Categoria</label>
          <select 
            value={category} 
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Selecione uma categoria"
          >
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
          </select>
        </div>
        <div className="edit-form-group">
          <label>Imagem</label>
          <input 
            type="text" 
            value={image} 
            onChange={(e) => setImage(e.target.value)} 
            placeholder="Digite o link da imagem"
          />
        </div>
        <div className="edit-form-group">
          <label>Vídeo</label>
          <input 
            type="text" 
            value={url} 
            onChange={(e) => setUrl(e.target.value)} 
            placeholder="Digite o link do vídeo"
          />
        </div>
        <div className="edit-form-group">
          <label>Descrição</label>
          <textarea 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            placeholder="Digite a descrição"
          ></textarea>
        </div>
        <button onClick={handleSave} className="edit-modal-button">Salvar</button>
        <button onClick={onClose} className="cancel-modal-button">Cancelar</button>
      </div>
    </div>
  );
}

export default EditVideoModal;
