
import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'a85af220d32fb519177ae1885af75e44';
const TREND_TREND = 'trending/movie/day';

export const fetchTrend = async () => {
    const params = new URLSearchParams({
        api_key: API_KEY,
        language: 'en-US',
        page: '1',
    });

    try {
        const response = await axios.get(`${BASE_URL}${TREND_TREND}?${params}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching trend:', error);
        throw error;
    }
};

// fetchTrend()
//     .then(result => {
//         console.log(result);
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });