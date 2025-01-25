import React, { useState, useEffect } from 'react';
import { fetchItems, addItem, updateItem, deleteItem } from '../../../../services/firebaseCRUD';
import Swal from 'sweetalert2';
import './todos.scss';
import '../personalProjects.scss';

const Todos = () => {
    const [items, setItems] = useState([]);

    const [newItem, setNewItem] = useState('');

    const [editingItem, setEditingItem] = useState(null);

    const collectionName = 'todos';


    const loadItems = async () => {
        const data = await fetchItems(collectionName);
        setItems(data);
    };

    useEffect(() => {
        loadItems();
    }, []);


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!newItem.trim()) return;

        if (editingItem) {
            await updateItem(collectionName, editingItem.id, { title: newItem });
            Swal.fire('Editado', 'El item ha sido editado correctamente.', 'success');
        } else {
            await addItem(collectionName, { title: newItem });
            Swal.fire('Agregado', 'El item ha sido agregado correctamente.', 'success');
        }

        setNewItem('');
        setEditingItem(null);
        loadItems();
    };


    const handleDelete = async (id) => {
        const confirm = await Swal.fire({
            title: '¿Estás seguro?',
            text: 'Esta acción no se puede deshacer.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar',
        });

        if (confirm.isConfirmed) {
            await deleteItem(collectionName, id);
            loadItems();
            Swal.fire('Eliminado', 'El item ha sido eliminado.', 'success');
        }
    };


    const handleEdit = (item) => {
        setEditingItem(item);
        setNewItem(item.title);
    };

    return (
        <div className="todos-container">
            <h1>To Do List</h1>
            <div className='todos'>
                <form onSubmit={handleSubmit} className='add-task-container'>
                    <input
                        type="text"
                        placeholder="New item"
                        value={newItem}
                        onChange={(e) => setNewItem(e.target.value)}
                        style={{ width:'70%', height:'5vh', borderRadius:'5px',border:'solid 1px goldenrod'}}
                    />
                    <button className='addButton' type="submit">{editingItem ? 'Update' : 'Add'}</button>
                </form>


                <div className="items-list">
                    {items.map((item) => (
                        <div key={item.id} className="item">
                            <input
                                type="checkbox"
                                onChange={() => handleDelete(item.id)}
                                style={{width:'10%'}}
                            />
                            <p style={{width:'85%',overflow:'auto'}}>{item.title}</p>
                            <button onClick={() => handleEdit(item)} className='button-task'>✏️</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Todos;
