import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import "./Header.css";

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <header className='header'>
                <Link to="/home" className="logo">Fruits Warehouse</Link>
                <nav className='header-right'>
                    <Link to="/home">Home</Link>
                    <Link to="/feedback">Feedback</Link>
                    {
                        user ?
                        <Link to="/additems">Add Items</Link>
                        :
                        <span></span>

                    }
                    {
                        user ?
                        <Link to="/manageinventory">Manage Inventory</Link>
                        :
                        <span></span>

                    }
                    {
                        user ?
                        <Link to="/myitems">My Items</Link>
                        :
                        <span></span>

                    }
                    
                   
                    {
                            user ?
                            <button className='signout-button' onClick={handleSignOut}>Sign out</button>
                            :
                            <Link to="/login">Login</Link>
                           
                    }

                   {
                       user ?
                       <span></span>
                       :
                       <Link to="/register">Register</Link>
                   }
                </nav>

            </header>
        </div>
    );
};

export default Header;