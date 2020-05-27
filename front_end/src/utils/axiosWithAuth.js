import axios from 'axios';

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');
  return axios.create({
    headers: {
      authorization: token,
    },
    baseUrl: 'https://essentialism-3.herokuapp.com',
  });
};
