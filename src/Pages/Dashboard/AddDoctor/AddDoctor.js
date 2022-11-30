import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import Loading from '../../Shared/Loading/Loading';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate()

    const imageHostKey = process.env.REACT_APP_imgbbKey;

    // get data from server - 
    const { data: specialties = [], isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: () => fetch('https://doctors-portal-server-opal.vercel.app/appointmentSpecialty')
            .then(res => res.json())
    })

    // image host in imgBB and get image url - 
    const handleAddDoctor = (data) => {
        const image = data.image[0]
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: imgData.data.url
                    }
                    // post doctor info to the server - 
                    fetch('https://doctors-portal-server-opal.vercel.app/doctors', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result)
                            toast.success(`${data.name} is added successfully`)
                            navigate('/dashboard/managedoctors')
                        })

                }
            })
            .catch(err => console.error(err))
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-2xl mb-6'>Add a New Doctor</h2>
            <div className='w-[400px] shadow-xl p-10 rounded-xl'>
                <form onSubmit={handleSubmit(handleAddDoctor)}>
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
                        <label className="label label-text">Specialty</label>
                        <select {...register('specialty')} className="select select-bordered w-full">
                            {
                                specialties.map(specialty => <option
                                    key={specialty._id}
                                    value={specialty.name}
                                >{specialty.name}</option>)
                            }
                        </select>
                    </div>
                    <div className="form-control w-full">
                        <label className="label label-text">Photo</label>
                        <input type="file" {...register("image",
                            {
                                required: 'This is required.'
                            })}
                            className="input input-bordered w-full" />
                        <p className='text-red-600'>{errors.image?.message}</p>
                    </div>
                    <input className='btn btn-accent w-full text-white my-5' type="submit" value="Add" />
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;