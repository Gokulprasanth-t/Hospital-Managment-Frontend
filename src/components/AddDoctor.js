import React, { useState } from 'react';
import { createDoctor, deleteDoctor } from '../services/doctorServices';
import '../App.css';

const AddDoctor = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        specialty: '',
        email: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createDoctor(formData);
            alert('Doctor added successfully!');
            setFormData({ firstName: '', lastName: '', specialty: '', email: '' });
        } catch (error) {
            alert('Failed to add doctor');
        }
    };

    const handleDelete = async (e) => {
        e.preventDefault();
        try {
            await deleteDoctor(formData.id);
            // Assuming email is used as an identifier
            alert('Doctor deleted successfully!');
        } catch (error) {
            alert('Failed to delete doctor');
        }
    };

    return (
        <div className="add-doctor">
            <h2>Add New Doctor</h2>
            <form onSubmit={handleSubmit}>
                <input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
                <input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
                <input name="specialty" placeholder="Specialty" value={formData.specialty} onChange={handleChange} />
                <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                <button type="submit">Add Doctor</button>
            </form>
            <form onSubmit={handleDelete}>
                <h3>Delete Patient</h3>
                <input name="id" placeholder="Id of Patient to Delete" onChange={handleChange} />
                <button type="submit">Delete Patient</button>
            </form>
        </div>
    );
};

export default AddDoctor;
