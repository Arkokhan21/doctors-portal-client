import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const Login = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || "/";

    const { login, googleLogin } = useContext(AuthContext)

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [loginError, setLoginError] = useState('')

    // get token from custom hook(useToken) - 
    const [loginUserEmail, setLoginUserEmail] = useState('')
    const [token] = useToken(loginUserEmail)

    if (token) {
        navigate(from, { replace: true });
    }

    const handleLogin = (data) => {
        console.log(data)
        setLoginError('')
        login(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user)
                setLoginUserEmail(data.email)
            })
            .catch(err => {
                console.log(err.message)
                setLoginError(err.message)
            })
    }

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleLogin = () => {
        googleLogin(googleProvider)
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='h-[800px] flex justify-center items-center '>
            <div className='w-[400px] shadow-lg p-10 rounded-xl'>
                <h2 className='text-xl text-center font-semibold'>Login</h2>

                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full">
                        <label className="label label-text">Email</label>
                        <input type="email" {...register("email",
                            {
                                required: 'This is required.'
                            })}
                            className="input input-bordered w-full" />
                        <p className='text-red-600'>{errors.email?.message}</p>
                    </div>
                    <div className="form-control w-full">
                        <label className="label label-text">Password</label>
                        <input type="password" {...register("password",
                            {
                                required: 'This is required.',
                                minLength: { value: 6, message: 'Min Length is 6' }
                            })}
                            className="input input-bordered w-full" />
                        <p className='text-red-600'>{errors.password?.message}</p>
                        <label className="label label-text">Forgot Password?</label>

                        <div>{loginError && <p className='text-red-600'>{loginError}</p>}</div>
                    </div>
                    <input className='btn btn-accent w-full text-white my-5' type="submit" value="Login" />
                </form>
                <p>New to Doctors Portal? <Link to='/register' className='text-secondary'>Create new account</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleLogin} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;