import React, { useState, useEffect } from "react";
import Festivo from "../models/Festivos";

function Home({ date, festivos }) {
    console.log(festivos);
    
    return (
        <div>
            <h2>Home</h2>
            {date}<br />
            {festivos.map((festivo) => (
                <div key={festivo.id}>
                    {festivo.date} - {festivo.name}
                </div>


            ))}


        </div>
    );
}
export default Home;