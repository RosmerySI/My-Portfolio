import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { addItem, fetchItemById, updateItem } from '../../../services/firebaseCRUD';
import './cardForm.scss'


const CardForm = () => {

  const { id, type } = useParams();  

  const [formData, setFormData] = useState({
    title: '',
    notes: '',
    creator: '',
    type: type==='movies_series'?'':type,
  });
  const navigate = useNavigate();

  const fetchPost = async () => {
    if (id !== 'create') {
      const post = await fetchItemById(type, id);
      setFormData(post);
    }
  };

  useEffect(() => {
    if (id !== 'create') fetchPost();   
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id !== 'create') {
      await updateItem(formData.type, id, formData);
    } else {
      await addItem(formData.type, formData);
    }
    navigate(`/world/personal_projects/${type === 'movies' ||type === 'series'?'movies_series':type}`);
  };
  const isFormIncomplete = ['title', 'notes', 'creator'].some(
    (value) => typeof value !== 'string' || value.trim() === ''
  );

  const title =  type==='blog'?'Post': type==='books'? 'Book': 'Media'
  
  return (
    <div className="form_container">    
      <form className="form" onSubmit={handleSubmit}>
      <h1>{id !== 'create'?`Edit ${title}`:`New ${title}`}</h1>
        {
          type==='movies_series'?
          <select
          className='input'
          name="type"
          value={formData.type}
          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          required          
          >
          <option value="" disabled>Seleccione tipo</option>
          <option value="movies">Movies</option>
          <option value="series">Series</option>
        </select>
        :
        null
        }
        
        <input
          type="text"
          className='input'
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
        <textarea
          rows="5"
          className='input'
          placeholder="Notes"
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          required
          style={{width:'60%', height:'30%'}}
        />
        <input
          className='input'
          type="text"
          placeholder="Creator"
          value={formData.creator}
          onChange={(e) => setFormData({ ...formData, creator: e.target.value })}
          required
        />
        <button className='button' type="submit" disabled={isFormIncomplete}>{id !== 'create' ? 'Update' : 'Create'}</button>
        <button className='buttonCancel' onClick={()=>{navigate(-1)}} >Cancel</button>
      </form>
    </div>
  );
};

export default CardForm;
