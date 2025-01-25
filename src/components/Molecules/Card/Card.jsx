import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Swal from 'sweetalert2';
import { deleteItem } from '../../../services/firebaseCRUD';
import './card.scss'

export const Card = ({ title, items, handleForm, loadData }) => {

    const handleDelete = async (id, collection) => {
        const confirmResult = await Swal.fire({
            title: '¿Estás seguro?',
            text: 'Esta acción eliminará el ítem permanentemente.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar',
        });

        if (confirmResult.isConfirmed) {
            try {
                await deleteItem(collection, id);
                loadData();
                Swal.fire('Eliminado', 'El ítem ha sido eliminado correctamente.', 'success');
            } catch (error) {
                console.error('Error deleting item:', error);
                Swal.fire('Error', 'Hubo un problema al eliminar el ítem.', 'error');
            }
        }
    };
    return (
        <>
            {title? <h3 style={{margin:'0'}}>{title}</h3> : null}
            {items.map((item) => (
                <section key={item.id} className='card' style={item.type === 'blog' ?{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/lined-paper-2.png")'}:null}>
                    <div>
                    {
                        item.src ? 
                        
                        <LazyLoadImage 
                        className='card_image' 
                        src={item.src} 
                        alt={item.title}  
                        effect="blur"                        
                        /> 
                       
                        : 
                        null
                    }
                     </div>
                    <h3 style={{margin:'0',fontSize:'28px',  fontFamily: "Great Vibes"}}>{item.title}</h3>
                    {
                        item.creator ? <h4 style={{margin:'0'}}>{item.creator}</h4> : null
                    }
                    <p className='card_paragraph'>{item.notes}</p>
                    {
                      title === 'Blog' ? <small>{new Date(item?.timestamp.toDate()).toLocaleString()}</small> : null
                    }
                    {
                        item.type !== 'self_information' ?
                            <div>
                                <button onClick={() => handleForm(item.id, item.type)}>Edit</button>
                                <button onClick={() => handleDelete(item.id, item.type)}>Delete</button>
                            </div>
                            :
                            null
                    }

                </section>
            ))}
        </>
    );
};
