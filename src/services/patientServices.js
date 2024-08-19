import axios from 'axios';

const API_URL = 'https://hospital-management-3bh6.vercel.app/api/patients';

export const getAllPatients = async () => {
    return axios.get(`${API_URL}/getall`);
};

export const createPatient = async (patientData) => {
    return axios.post(`${API_URL}/create`, patientData);
};

export const getPatientById = async (id) => {
    return axios.get(`${API_URL}/getspecific/${id}`);
};

export const updatePatient = async (id, patientData) => {
    return axios.put(`${API_URL}/update/${id}`, patientData);
};

export const deletePatient = async (id) => {
    return axios.delete(`${API_URL}/delete/${id}`);
};
