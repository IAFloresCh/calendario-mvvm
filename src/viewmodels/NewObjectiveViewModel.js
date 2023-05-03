import { useState, useEffect } from 'react';
import axios from 'axios';

function HomeViewModel() {
    
    const [time, setTime] = useState('');

    const handleTimeChange = (event) => {
        setTime(event.target.value);
    };

    return {
        time,
        handleTimeChange,
        
    };
}

export default HomeViewModel;