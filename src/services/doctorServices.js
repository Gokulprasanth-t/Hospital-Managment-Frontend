import axios from 'axios';

const API_URL = 'https://hospital-managment-topaz.vercel.app/api/doctors';
// const API_URL='http://localhost:4001/api/doctors'

export const getAllDoctors = async () => {
    return axios.get(`${API_URL}/getall`);
};

export const createDoctor = async (doctorData) => {
    return axios.post(`${API_URL}/create`, doctorData);
};

export const getDoctorById = async (id) => {
    return axios.get(`${API_URL}/getspecific/${id}`);
};

export const updateDoctor = async (id, doctorData) => {
    return axios.put(`${API_URL}/update/${id}`, doctorData);
};

export const deleteDoctor = async (id) => {
    return axios.delete(`${API_URL}/delete/${id}`);
};
