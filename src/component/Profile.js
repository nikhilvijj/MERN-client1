import React, { useContext } from 'react';
import { Mycontext } from '../Mycontext';
const Profile = () => {
    const { users } = useContext(Mycontext);
    const user = users.length ? users[users.length - 1] : null; // assuming last registered user for simplicity

    if (!user) {
        return <p>No user profile available</p>;
    }

    return (
        <div className="container">
            <h1>Profile</h1>
            <table className="profile-table">
                <tbody>
                    <tr>
                        <th>Name</th>
                        <td>{user.name}</td>
                    </tr>
                    <tr>
                        <th>Age</th>
                        <td>{user.age}</td>
                    </tr>
                    <tr>
                        <th>Username</th>
                        <td>{user.username}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Profile;
