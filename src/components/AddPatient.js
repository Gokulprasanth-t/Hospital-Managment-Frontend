// import React, { useState } from 'react';
// import { createPatient } from '../services/patientServices';
// import '../App.css';

// const AddPatient = () => {
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         // dateOfBirth: '',
//         phone: '',
//         email: ''
//     });

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             console.log(formData);
//             await createPatient(formData);
//             alert('Patient added successfully!');
//         } catch (error) {
//             alert('Failed to add patient');
//         }
//     };

//     return (
//         <div className="add-patient">
//             <h2>Add New Patient</h2>
//             <form onSubmit={handleSubmit}>
//                 <input name="firstName" placeholder="First Name" onChange={handleChange} />
//                 <input name="lastName" placeholder="Last Name" onChange={handleChange} />
//                 {/* <input name="dateOfBirth" placeholder="Date of Birth" onChange={handleChange} /> */}
//                 <input name="phone" placeholder="Phone" onChange={handleChange} />
//                 <input name="email" placeholder="Email" onChange={handleChange} />
//                 <button type="submit">Add Patient</button>
//             </form>
//         </div>
//     );
// };

// export default AddPatient;


import React, { useState } from 'react';
import { createPatient, deletePatient } from '../services/patientServices';

import '../App.css';

const AddPatient = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
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
            console.log(formData);
            await createPatient(formData);
            alert('Patient added successfully!');
        } catch (error) {
            alert('Failed to add patient');
        }
    };

    const handleDelete = async (e) => {
        e.preventDefault();
        try {
            await deletePatient(formData.id);
            // Assuming email is used as an identifier
            alert('Patient deleted successfully!');
        } catch (error) {
            alert('Failed to delete patient');
        }
    };

    return (
        <div className="patient-management">
            <h2>Add or Delete Patient</h2>
            <form onSubmit={handleSubmit}>
                <input name="firstName" placeholder="First Name" onChange={handleChange} />
                <input name="lastName" placeholder="Last Name" onChange={handleChange} />
                <input name="phone" placeholder="Phone" onChange={handleChange} />
                <input name="email" placeholder="Email" onChange={handleChange} />
                <button type="submit">Add Patient</button>
            </form>
            <form onSubmit={handleDelete}>
                <h3>Delete Patient</h3>
                <input name="id" placeholder="Id of Patient to Delete" onChange={handleChange} />
                <button type="submit">Delete Patient</button>
            </form>
        </div>
    );
};

export default AddPatient;
