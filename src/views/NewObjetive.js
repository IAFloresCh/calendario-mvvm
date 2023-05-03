import React, { useState } from 'react';
import Inputs from './Inputs';
function NewObjective ({time, handleTimeChange}) {

    return (
        <div>
        <h2>New Objective</h2>

        {time}


        <Inputs type="time" time={time} onChange={handleTimeChange}/>


        </div>
    );
}
export default NewObjective;