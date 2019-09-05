import axios from 'axios';

export default () => {
    return axios.create(
        {
            baseURL: 'http://172.17.0.1:5000',
            timeout : 5000,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    )
}