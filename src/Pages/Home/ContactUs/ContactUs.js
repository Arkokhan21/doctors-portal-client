import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import background from '../../../assets/images/appointment.png'

const ContactUs = () => {
    return (
        <section className="bg-no-repeat bg-cover bg-center mt-36" style={{ backgroundImage: `url(${background})` }}>
            <form className="p-10 mx-auto">
                <div className='text-center mb-10'>
                    <h2 className="text-xl font-bold my-3 text-secondary">Contact Us</h2>
                    <h2 className="text-4xl text-white">Stay connected with us</h2>
                </div>
                <div className='text-center'>
                    <div>
                        <input type="email" placeholder="Email Address" required className="p-3 rounded-lg w-1/2" />
                    </div>
                    <div>
                        <input type="text" placeholder="Subject" required className="p-3 rounded-lg my-5 w-1/2" />
                    </div>
                    <div>
                        <textarea type="text" placeholder="Your message..." required className="p-10 rounded-lg mb-10 w-1/2"></textarea>
                    </div>
                    <div>
                        <PrimaryButton>Submit</PrimaryButton>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default ContactUs;