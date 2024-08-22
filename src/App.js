// import React from 'react';
// import './App.css';
// import PatientList from './components/PatientList';
// import AddPatient from './components/AddPatient';


// function App() {
//     return (
//         <div className="App">
//             <h1>Hospital Management System</h1>
//             <AddPatient />
//             <PatientList />
//         </div>
//     );
// }

// export default App;

import React, { useState } from 'react';
import './App.css';
import PatientList from './components/PatientList';
import AddPatient from './components/AddPatient';
import DoctorList from './components/DoctorList';
import AddDoctor from './components/AddDoctor';
import AddAppointment from './components/AddAppointment';
import AppointmentList from './components/AppointmentList';

function App() {
    const [view, setView] = useState(null);

    const handleViewChange = (view) => {
        setView(view);
    };

    return (
        <div className="App">
            <h1>Hospital Management System</h1>
            {!view && (
                <div className="button-group">
                    <button onClick={() => handleViewChange('doctor')}>Doctor</button><br/>
                    <button onClick={() => handleViewChange('appointment')}>Appointment</button><br/>
                    <button onClick={() => handleViewChange('patient')}>Patient</button>
                </div>
            )}
            {view === 'doctor' && (
                <div>
                    <AddDoctor />
                    <DoctorList />
                </div>
            )}
            {view === 'appointment' && (
                <div>
                    <AddAppointment />
                    <AppointmentList/>
                </div>
            )}
            {view === 'patient' && (
                <div>
                    <AddPatient />
                    <PatientList />
                </div>
            )}
            {view && (
                <button className="back-button" onClick={() => handleViewChange(null)}>Back</button>
            )}
        </div>
    );
}

export default App;
