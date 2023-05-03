import React from 'react'

function DayComponent (props){
    return (
        <div className="day">
        <div>{props.day}</div>
        <input type={props.type} />
        </div>
    )
}


export default DayComponent;