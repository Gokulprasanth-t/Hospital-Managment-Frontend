import React, { useState } from 'react';
import { getAllDoctors } from '../services/doctorServices';
import '../App.css';

const DoctorList = () => {
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchDoctors = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await getAllDoctors();
            setDoctors(response.data.data);
        } catch (error) {
            setError('Failed to fetch doctors');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="doctor-list">
            <h2>Doctors List</h2>
            <button onClick={fetchDoctors}>Fetch Doctors</button>
            {loading && <p className="loading">Loading...</p>}
            {error && <p className="error">{error}</p>}
            <ul>
                {doctors.map((doctor) => (
                    <li key={doctor._id}>
                        {doctor.firstName} {doctor.lastName} - {doctor._id}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DoctorList;
