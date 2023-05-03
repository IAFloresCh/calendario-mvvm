import React, { useState } from 'react';
function Inputs({type, onChange}){




    const [time, setTime] = useState('');

    //send event to parent
      



    return(
        <div>
            <input type={type} time={time}  onChange={onChange} />
            {time}
        </div>
    );
}
export default Inputs;