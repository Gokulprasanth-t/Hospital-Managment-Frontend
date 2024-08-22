import axios from 'axios';

const API_URL = 'https://hospital-managment-topaz.vercel.app/api/appointments';
// const API_URL = 'http://localhost:4001/api/appointments';

export const createAppointment = async (appointmentData) => {
    return axios.post(`${API_URL}/create`, appointmentData);
};

export const getAllAppointment = async () => {
    return axios.get(`${API_URL}/getall`);
};
