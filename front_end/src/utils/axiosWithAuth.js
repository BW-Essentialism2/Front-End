import axios from 'axios'

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token')
    return axios.create({
        headers: {
            authorization: token
        }
        baseUrl: ''
    })
}

//WHICH STORAGE DO I USE??????????
//What is my BASE URL??????
//Make sure headers format to get token is correct!!!!!!!