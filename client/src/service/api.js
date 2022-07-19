// To make hit at the backend to fetch out Data
import axios from 'axios';

export const getNews = async() => {
    const URL = '';
    try {
       return await axios.get(`${URL}/news`); // Get API means To get data from the Backend and Post API to provide data from frontend to backend 
    } catch (error) {

    }
}
