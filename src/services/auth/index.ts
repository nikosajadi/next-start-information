import { api } from '../api';

const login = (data: any) => api.post('users/signin', data);
const register = (data: any) => api.post('users/signup', data);


export { register, login };