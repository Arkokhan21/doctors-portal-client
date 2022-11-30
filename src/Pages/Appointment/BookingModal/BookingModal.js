import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
    const date = format(selectedDate, 'PP')
    const { name, slots, price } = treatment

    const { user } = useContext(AuthContext)

    const handleBooking = (event) => {
        event.preventDefault()
        const form = event.target
        const slot = form.slot.value
        const patientName = form.name.value
        const phone = form.phone.value
        const email = form.email.value

        const booking = {
            patient: patientName,
            phone,
            email,
            treatment: name,
            slot,
            appointmentDate: date,
            price
        }

        // post single data in server - 
        fetch('https://doctors-portal-server-opal.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    // if the value is null the modal is closed - 
                    setTreatment(null)
                    toast.success('Booking Confirmed')
                    refetch()
                }
                else {
                    toast.error(data.message)
                }
            })
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-10">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3'>
                        <input type="text" value={date} disabled className="input input-bordered w-full" />
                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" defaultValue={user?.displayName} disabled className="input input-bordered w-full" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full" required />
                        <input name='email' type="email" defaultValue={user?.email} disabled className="input input-bordered w-full" />
                        <input type="submit" className='w-full p-2 btn btn-accent text-white' value="SUBMIT" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;