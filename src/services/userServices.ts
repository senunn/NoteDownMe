import axiosClient from "@/configs/apiClient";


export const fetchAllUsers = () => {
    return axiosClient.get('/users');
}

export const login = ({email, password}: {email: string; password: string}) => {
    console.log("Backend API:", import.meta.env.VITE_API_URL);
    return axiosClient.post('/login', {email, password});
}