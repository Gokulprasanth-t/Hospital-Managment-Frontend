import React, { useState } from 'react';
import { getAllPatients } from '../services/patientServices';
import '../App.css';

const PatientList = () => {
    const [patients, setPatients] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchPatients = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await getAllPatients();
            setPatients(response.data.data);
        } catch (error) {
            setError('Failed to fetch patients');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="patient-list">
            <h2>Patients List</h2>
            <button onClick={fetchPatients}>Fetch Patients</button>
            {loading && <p className="loading">Loading...</p>}
            {error && <p className="error">{error}</p>}
            <ul>
                {patients.map((patient) => (
                    <li key={patient._id}>
                        {patient.firstName} {patient.lastName} - {patient._id}
                    </li>
                ))
                }
            </ul>
        </div>
    );
};

export default PatientList;
