import React from 'react';
import doctor from '../../../assets/images/doctor-small.png';
import bg from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section className='bg-no-repeat bg-cover bg-center mt-52' style={{ backgroundImage: `url(${bg})` }}>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} alt='' className="-mt-32 lg:w-1/2 hidden md:block" />
                    <div>
                        <h3 className='text-lg text-secondary font-bold mb-5'>Appointment</h3>
                        <h1 className="text-5xl text-white font-bold">Make an appointment Today</h1>
                        <p className="text-white my-5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;