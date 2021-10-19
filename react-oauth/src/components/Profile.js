import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import './profile.css'


const Profile = () => {

    const { user, logout } = useAuth0()

    return (
        <div className="profile">
            {!user.email_verified ? 'Email anda belum diverifikasi, silahkan verifikai' : null}
            <h1>Profile</h1>
            <table>
                <tr>
                    <td>Nama</td>
                    <td>:</td>
                    <td>{user.name}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>:</td>
                    <td>{user.email}</td>
                </tr>
            </table>
            <div >
                <img src={user.picture} height={150} width={150} alt="" />
            </div>
            <div>
                <button onClick={logout}>Logout</button>
            </div>
        </div>
    );
}

export default Profile