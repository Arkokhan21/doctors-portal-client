import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Testimonial from './Testimonial';

const Testimonials = () => {

    // Dynamic Data Create For Reviews -
    const reviews = [
        {
            id: 1,
            name: 'Winson Herry',
            img: people1,
            userReview: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
        {
            id: 2,
            name: 'Winson Herry',
            img: people2,
            userReview: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
        {
            id: 3,
            name: 'Winson Herry',
            img: people3,
            userReview: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
    ]

    return (
        <section className='mt-28'>
            <div className='flex justify-between'>
                <div>
                    <h3 className='text-xl font-bold text-secondary mb-2'>Testimonial</h3>
                    <h2 className='text-4xl'>What Our Patients Says</h2>
                </div>
                <figure>
                    <img className='lg:w-48 sm:w-24' src={quote} alt="" />
                </figure>
            </div>
            <div className='grid gap-14 mt-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review => <Testimonial key={review.id} review={review}></Testimonial>)
                }
            </div>
        </section>
    );
};

export default Testimonials;