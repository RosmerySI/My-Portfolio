import React, { useState } from 'react';
import  './familyForm.scss';

const FamilyForm = ({ onAddUser }) => {
    const [name, setName] = useState('');
    const [color, setColor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && color) {
            onAddUser(name, color);
            setName('');
            setColor('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className='family-form-container'>
            <h2>Add a Family Member</h2>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name"
                style={{width:'100%',height:'5vh', borderRadius:'5px',border:'solid 1px goldenrod'}}
            />
            <div style={{display:'flex', justifyContent:'space-between',marginTop:'5px'}}>
                <p>Pick a color:</p>
                {['pink', 'purple', 'gold', 'blue', 'black'].map((c) => (
                    <label  style={{ backgroundColor: c, borderRadius:'5%', display:'flex',justifyContent:'center',alignItems:'center'}} key={c}>
                        <input
                            type="radio"
                            value={c}
                            checked={color === c}
                            onChange={(e) => setColor(e.target.value)}
                            style={{ backgroundColor: c}}
                        />
                        <span style={{ backgroundColor: c }}></span>
                    </label>
                ))}
            </div>
            <button className='addButton' type="submit">Add</button>
        </form>
    );
};

export default FamilyForm;
