import React from 'react';
import './list.scss';

export const List = ({title,items}) => {
  
 
  return (    
      <div >
        <h2 style={{textAlign:'center'}}>{title}</h2>
        <ul className='list' >
          {
          items.map((item,index) => (
            <li className='list-item' key={index}>{item}</li>
          ))
          }
        </ul>
      </div>
     
  );
};
