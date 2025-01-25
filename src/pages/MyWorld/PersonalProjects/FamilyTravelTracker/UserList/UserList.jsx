
import React from 'react';
import  './userList.scss';
import TotalCount from '../TotalCount/TotalCount';

const UserList = ({ users, currentUser, setCurrentUser,visitedCountries,setVisitedCountries }) => {

    const onChangingUser = (user) =>{
        setCurrentUser(user)
        
    }

    return (
        <div className="user-list">
            <h2>Family Members</h2>
            {users.map((user) => (
                <div key={user.id}>
                    <input
                        type="radio"
                        checked={currentUser.id === user.id}
                        onChange={() => onChangingUser(user)}
                        
                    />
                    <label style={{ border:`solid 1px ${user.color}`, fontSize:'20px' }}>{user.name}</label>
                </div>
            ))}
            <TotalCount total={Object.keys(visitedCountries).length} />
        </div>
    );
};

export default UserList;
