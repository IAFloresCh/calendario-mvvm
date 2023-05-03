import { useState, useEffect } from 'react';
import axios from 'axios';

function HomeViewModel() {
    const [date, setDate] = useState('');

    const urlBase = 'http://127.0.0.1:8080/festivos';
    const [festivos, setFestivos] = useState([]);

    // useEffect to get a current date and time
    useEffect(() => {
        const now = new Date();
        setDate(now.toLocaleDateString());
    }, []);

    // get data once from API using axios
    useEffect(() => {
        const getFestivos = async () => {
            const response = await axios.get(urlBase);
            setFestivos(response.data.festivos);
        }
        getFestivos();
    }, []);


    return {
        date,
        festivos,
    };
}

export default HomeViewModel;