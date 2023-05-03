import React, { useState } from 'react';
import Inputs from './Inputs';
function NewObjective (){
    const [time, setTime] = useState('');
    const [timeDays, setTimeDays] = useState([{lunes: ''},
                                             {martes: ''}, 
                                             {miercoles: ''}, 
                                             {jueves: ''}, 
                                             {viernes: ''}, 
                                             {sabado: ''}, 
                                             {domingo: ''}]);

    const handleTimeChange = (event) => {
        setTime(event.target.value);
        setTimeDays({lunes: event.target.value});

        console.log(timeDays);
    };
    return (
        <div>
        <h2>New Objective</h2>

        {time}


        <Inputs type="time" time={time} onChange={handleTimeChange}/>


        </div>
    );
}
export default NewObjective;