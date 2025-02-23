import axios from 'axios';

const baseUrl = 'http://localhost:3005/notes';


const getAllNotes = async () => {
    const response = await axios.get(baseUrl);
    return response.data;
    };

const createNote = async resource => {
    const response = await axios.post(baseUrl, resource);
    return response.data;
}

const updateNote = async (id, resource) => {
    const response = await axios.put(`${baseUrl}/${id}`, resource);
    return response.data;
}

export default { getAllNotes, createNote, updateNote };
