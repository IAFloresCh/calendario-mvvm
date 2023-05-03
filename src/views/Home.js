import {useState, useEffect } from "react";

function Home (){
    const [time, setTime] = useState('');
    const date = new Date();

    //useEffect to get a current date and time
    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            setTime(now.toLocaleTimeString());

        }, 1000);
        return () => clearInterval(interval);
    }, []);

    


    return (
        <div>
        <h2>Home</h2>
        {date.toLocaleDateString()}<br/>
        {time}
        </div>
    );
}
export default Home;