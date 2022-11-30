import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const Register = () => {

    const { createUser, updateUser, googleLogin } = useContext(AuthContext)

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [registerError, setRegisterError] = useState('')

    // get token from custom hook(useToken) - 
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail)
    const navigate = useNavigate()

    if (token) {
        navigate('/');
    }

    const handleRegister = (data) => {
        setRegisterError('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user)
                toast.success('Register Successfull')

                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email);
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => {
                console.error(err.message)
                setRegisterError(err.message)
            })
    }

    // post single user in server -
    const saveUser = (name, email) => {
        const user = { name, email };
        fetch('https://doctors-portal-server-opal.vercel.app/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email)
            })
    }

    // google login -  
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
                <h2 className='text-xl text-center font-semibold'>Register</h2>

                <form onSubmit={handleSubmit(handleRegister)}>
                    <div className="form-control w-full">
                        <label className="label label-text">Name</label>
                        <input type="text" {...register("name",
                            {
                                required: 'This is required.'
                            })}
                            className="input input-bordered w-full" />
                        <p className='text-red-600'>{errors.name?.message}</p>
                    </div>
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
                                minLength: { value: 6, message: 'Min Length is 6' },
                                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/, message: 'Password must be strong!' }
                            })}
                            className="input input-bordered w-full" />
                        <p className='text-red-600'>{errors.password?.message}</p>

                        <div>{registerError && <p className='text-red-600'>{registerError}</p>}</div>
                    </div>
                    <input className='btn btn-accent w-full text-white my-5' type="submit" value="Register" />
                </form>
                <p>Already have an account? <Link to='/login' className='text-secondary'>Please Login</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleLogin} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Register;