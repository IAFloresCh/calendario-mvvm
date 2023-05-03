import React,{ useState } from "react";
import axios from "axios";

function CalendarioViewModels() {
    const [festivos, setFestivos] = useState([]);

    const urlBase = "https://api.generadordni.es/v2/holidays/holidays?country=ES&state=CT&year=";
    const finalYear = 2025;

    const getFestivos = async () => {
        const response = await axios.get(urlBase + finalYear);
        setFestivos(response.data.data);
        console.log(response.data.data);
    }

    getFestivos();


};

export default CalendarioViewModels;