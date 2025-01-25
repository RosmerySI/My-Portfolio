import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchItems } from '../../../../services/firebaseCRUD';
import './blog.scss'
import '../personalProjects.scss'
import { Card } from '../../../../components/Molecules/Card/Card';

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  const loadData = async () => {
    const data = await fetchItems('blog');
    setPosts(data);
  };

  
  useEffect(() => {
    loadData();
  }, []);

  const handleForm = (id,type) => {        
    navigate(`/world/personal_projects/form/${id}/${type}`);
  }

  return (
    <section className="blog_container" >
      
      <div className='title-addButton-container'>
      <h1>My Blog</h1>      
      <button className='addButton' onClick={() => handleForm('create','blog')}>New Post</button>
      </div>
     
      <Card title={''} items={posts} handleForm={handleForm} loadData={loadData}/>     
    </section>
  );
};

export default BlogList;
