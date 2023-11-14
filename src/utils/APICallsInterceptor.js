import axios from 'axios';


axios.interceptors.request.use(
    function(config){
        const token = localStorage.getItem('token');
        config.headers.Authorization = `Bearer ${token}`;
        config.baseURL = 'http://localhost:4000';
        return config
    },
    function (error){
        return Promise.reject(error);
    }
);

const calls = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    patch: axios.patch
}

export default calls;