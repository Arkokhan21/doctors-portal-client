import React from 'react';
import img1 from '../../../assets/images/chair.png'
import img2 from '../../../assets/images/bg.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <div className='lg:p-32 bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(${img2})` }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={img1} className="lg:w-1/2 rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;