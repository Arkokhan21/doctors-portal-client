import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const DisplayError = () => {
    const { logOut } = useContext(AuthContext);
    const error = useRouteError();
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/login');
            })
            .catch(err => console.log(err))
    }

    return (
        <section className='text-center'>
            <div className="mt-32">
                <h1 className="mb-4 text-7xl font-extrabold lg:text-9xl">404</h1>
                <p className="mb-4 text-4xl font-bold md:text-4xl">Something's missing.</p>
                <p className="mb-4 text-xl font-bold text-red-400">{error.statusText || error.message}</p>
                <h4 className="text-3xl"> Please <button className='btn btn-error' onClick={handleLogOut}>Logout</button> and log back in</h4>
            </div>
        </section>
    );
};

export default DisplayError;