import React, { useState, useEffect } from 'react';


const FAQ = () => {
    const [second, setSecond] = useState(0);
    const [minute, setMinute] = useState(0);
    const [hour, setHour] = useState(0);
    const [running, setRunning] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (!running) return;
        // if (running == false) return;
        const timer = setTimeout(() => {
            setSecond(prevSecond => prevSecond + 1);

            if (second === 59) {
                setSecond(0);
                setMinute(prevMinute => prevMinute + 1);
            }
            if (minute === 59 && second === 59) {
                setMinute(0);
                setHour(prevHour => prevHour + 1);
            }
        }, 1000);
        return () => clearTimeout(timer);
    }, [second, running]);

    const handleStart = () => {
        setRunning(true);
    }

    const handlePause = () => {
        setRunning(false);
        setIsPaused(true);
    }

    const handleReset = () => {
        setRunning(false);
        setIsPaused(false);
        setSecond(0);
        setMinute(0);
        setHour(0);
    }

    const handleResume = () => {
        setRunning(true);
        setIsPaused(false);
    }



    return (
        <>
        <div style={{  gap: '10px', marginTop: '20px',margin:'10px' ,padding:'10px',border:'1px solid black',}}> 
                
            <h1> {isPaused ? 'Timer Paused' : 'Timer Start'}:  {hour < 10 ? `0${hour}` : hour}:{minute < 10 ? `0${minute}` : minute}:{second < 10 ? `0${second}` : second}</h1>
            <div style={{ display: 'flex', gap: '10px', marginTop: '20px', flexDirection: 'row',margin:'10px' ,padding:'5px',alignText:'center'}}>
                {
                    (!running && !isPaused) && <button onClick={handleStart} style={{padding:'10px',borderRadius:'10px',width:'80px',}}> Start </button>
                }

                {
                    running && <button onClick={handlePause} style={{padding:'10px',borderRadius:'10px',width:'80px'}}> Pause </button>
                }

                {
                    isPaused && <button onClick={handleResume} style={{padding:'10px',borderRadius:'10px',width:'80px'}}> Resume </button>
                }
                
                <button onClick={handleReset} style={{padding:'10px',borderRadius:'10px',width:'78px'}}> Reset </button>
            </div>
     </div>

        </>
    )
}
export default FAQ;