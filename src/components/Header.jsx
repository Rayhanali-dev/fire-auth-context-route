import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Header = () => {
    const {user, loggedOut} = useContext(AuthContext);

    const handleLoggedOut = () => {
        loggedOut()
        .then( () => {} )
        .catch(error => {
            console.log(error.message);
        })
    }

    return (
        <>
            <div className="bg-primary text-primary-content">
                <div className='max-w-7xl mx-auto flex items-center justify-between'>
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                    <div className='flex items-center gap-8'>
                        <Link to={`/`}>Home</Link>
                        <Link to={`/order`}>Order</Link>
                        <Link to={`/profile`}>Profile</Link>
                        <Link to={`/login`}>Login</Link>
                        <Link to={`/register`}>Register</Link>
                        {
                            user ? <div>
                                <span>{user.email}</span>
                                <button onClick={handleLoggedOut} className='btn btn-info'>Sign Out</button>
                            </div> : <button className='btn btn-info'><Link to={`/login`}>Login</Link></button>
                        }
                    </div>
                </div>
            </div>
        </>
    )
};

export default Header;