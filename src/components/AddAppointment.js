import React, { useState, useEffect } from 'react';
import { getAllDoctors } from '../services/doctorServices';
import { createAppointment } from '../services/appointmentServices';
import '../App.css';

const AddAppointment = () => {
    const [doctors, setDoctors] = useState([]);
    const [formData, setFormData] = useState({
        patientId: '',
        doctorId: '',
        date: '',
        time: '',
        notes: ''
    });

    const fetchDoctors = async () => {
        try {
            const response = await getAllDoctors();
            setDoctors(response.data.data);
        } catch (error) {
            console.error('Failed to fetch doctors:', error);
        }
    };

    useEffect(() => {
        fetchDoctors();
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createAppointment(formData);
            alert('Appointment added successfully!');
            setFormData({ patientId: '', doctorId: '', date: '', time: '', notes: '' });
        } catch (error) {
            alert('Failed to add appointment');
        }
    };

    return (
        <div className="add-appointment">
            <h2>Add New Appointment</h2>
            <h3>Doctors List</h3>
            <ul>
                {doctors.map((doctor) => (
                    <li key={doctor._id}>
                        {doctor.firstName} {doctor.lastName} - {doctor._id}
                    </li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input name="patientId" placeholder="Patient ID" value={formData.patientId} onChange={handleChange} />
                <input name="doctorId" placeholder="Doctor ID" value={formData.doctorId} onChange={handleChange} />
                <input name="date" type="date" value={formData.date} onChange={handleChange} />
                <input name="time" type="time" value={formData.time} onChange={handleChange} />
                <textarea name="notes" placeholder="Notes" value={formData.notes} onChange={handleChange} />
                <button type="submit">Add Appointment</button>
            </form>
        </div>
    );
};

export default AddAppointment;
