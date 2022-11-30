import React from 'react';
import treatment from '../../../assets/images/treatment.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const CareCard = () => {
    return (
        <div className="card lg:card-side mt-40">
            <div className='sm:w-3/5 lg:w-4/5 lg:ml-24'>
                <figure><img className='rounded-xl' src={treatment} alt="" /></figure>
            </div>
            <div className="card-body lg:mr-24 lg:ml-10">
                <h2 className="card-title font-bold text-5xl mb-6">Exceptional Dental <br /> Care, on Your Terms</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <div className="card-actions mt-5">
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default CareCard;