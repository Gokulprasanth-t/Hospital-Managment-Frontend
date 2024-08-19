import React from 'react';
import './App.css';
import PatientList from './components/PatientList';
import AddPatient from './components/AddPatient';


function App() {
    return (
        <div className="App">
            <h1>Hospital Management System</h1>
            <AddPatient />
            <PatientList />
        </div>
    );
}

export default App;
