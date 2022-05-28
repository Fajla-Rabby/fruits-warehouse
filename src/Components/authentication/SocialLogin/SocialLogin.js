import React from 'react';
import { useNavigate } from 'react-router-dom';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import auth from '../../../firebase.init';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;

    if (error) {
        errorElement = <div>
            <p className='text-danger'>Error: {error.message}</p>
        </div>

    }
    if (user) {
        navigate('/home');
    }


    return (
        <div>
            <div >
                <p >or</p>
            </div>
            {errorElement}
            <button
                onClick={() => signInWithGoogle()}
                className='button'>
                <span style={{ marginLeft: '2px' }}>Google Sign In</span>
            </button>

        </div>

    );
};

export default SocialLogin;