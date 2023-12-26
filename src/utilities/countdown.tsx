import React, { useState, useEffect } from 'react';
interface CountdownProps {
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
  
}

const Countdown: React.FC<CountdownProps> = ({ setSubmitted }) => {
  const calculateTimeLeft = (targetTime: number): { hours: string; minutes: string; seconds: string } => {
    const difference = targetTime - new Date().getTime();

    let timeLeft = {
      hours: '00',
      minutes: '00',
      seconds: '00',
    };

    if (difference > 0) {
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24).toString().padStart(2, '0');
      const minutes = Math.floor((difference / 1000 / 60) % 60).toString().padStart(2, '0');
      const seconds = Math.floor((difference / 1000) % 60).toString().padStart(2, '0');

      timeLeft = {
        hours,
        minutes,
        seconds,
      };
    }

    return timeLeft;
  };

  

  const twoHoursFromNow = new Date().getTime() + 2 * 60 * 60 * 1000; // Calculate 2 hours from now
  const [targetTime] = useState(twoHoursFromNow);
  const [time, setTime] = useState(calculateTimeLeft(targetTime));

  useEffect(() => {
    const timer = setInterval(() => {
      const updatedTimeLeft = calculateTimeLeft(targetTime);
      setTime(updatedTimeLeft);

      if (updatedTimeLeft.hours === '00' && updatedTimeLeft.minutes === '00' && updatedTimeLeft.seconds === '00') {
        clearInterval(timer);
        setSubmitted(true); // Update submitted state to true after two hours
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetTime, setSubmitted]);

  return (
    <div style={{display:'flex',justifyContent:'space-between',marginInline:'60px',marginTop:'30px'}}>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
            <h1 style={{border:'1px solid',marginBlock:'0px',paddingInline:'15px'}}>{time.hours}</h1>
            <p>Hours</p>
        </div>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
            <h1 style={{border:'1px solid',marginBlock:'0px',paddingInline:'15px'}}>{time.minutes}</h1>
            <p>Minutes</p>
        </div>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
            <h1 style={{border:'1px solid',marginBlock:'0px',paddingInline:'15px'}}>{time.seconds}</h1>
            <p>Seconds</p>
        </div>
        
      </div>
  );
};

export default Countdown;
