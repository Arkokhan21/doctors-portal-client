import React from 'react';

const Testimonial = ({ review }) => {

    const { name, img, userReview, location } = review

    return (
        <div className="card shadow-xl p-8">
            <div className="p-4">
                <div className="flex space-x-4">
                    <div>
                        <img src={img} alt="" className=" ring ring-secondary ring-offset-base-100 ring-offset-2 w-12 h-12 rounded-full" />
                    </div>
                    <div>
                        <h4 className="font-bold">{name}</h4>
                        <span className="text-xs">{location}</span>
                    </div>
                </div>
            </div>
            <div className="p-4 text-sm">
                <p>{userReview}</p>
            </div>
        </div>
    );
};

export default Testimonial;