import axios from 'axios';

const baseUrl = 'http://localhost:3005/numbers';

const getAllNumbers = async () => {
    const response = await axios.get(baseUrl);
    return response.data;
    };

const createNumber = async resource => {
    const response = await axios.post(baseUrl, resource);
    return response.data;
}

const updateNumber = async (id, resource) => {
    const response = await axios.put(`${baseUrl}/${id}`, resource);
    return response.data;
}


export default { getAllNumbers, createNumber, updateNumber };