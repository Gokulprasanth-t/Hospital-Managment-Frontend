import React, { useState } from 'react';
import { getAllAppointment } from '../services/appointmentServices';
import '../App.css';

const AppointmentList = () => {
    const [appointment, setAppointments] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchAppointment = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await getAllAppointment();
            setAppointments(response.data.data);
        } catch (error) {
            setError('Failed to fetch Appointment');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="Appointment-list">
            <h2>Appointment List</h2>
            <button onClick={fetchAppointment}>Fetch Appointmnet</button>
            {loading && <p className="loading">Loading...</p>}
            {error && <p className="error">{error}</p>}
            <ul>
                {appointment.map((appointment) => (
                    <li key={appointment._id}>
                        {appointment._patientid} {appointment._doctorid} - {appointment.date} - {appointment.time}
                    </li>
                ))
                }
            </ul>
        </div>
    );
};

export default AppointmentList;
