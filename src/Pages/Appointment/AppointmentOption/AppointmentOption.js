import React from 'react';

const AppointmentOption = ({ appointmentOption, setTreatment }) => {

    const { name, slots, price } = appointmentOption

    return (
        <div className="card shadow-lg">
            <div className="card-body items-center text-center">
                <h2 className="card-title text-secondary font-bold">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available</p>
                <p><small>Price: ${price}</small></p>
                <div className="card-actions">
                    <label htmlFor="booking-modal"
                        disabled={slots.length === 0}
                        className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white"
                        onClick={() => setTreatment(appointmentOption)}>Book Appointment
                    </label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;