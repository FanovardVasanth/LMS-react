import React, { useState, useEffect } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
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

  const hours = 2; // Change this value to the number of hours you want to convert
  const seconds = hours * 3600; 

  return (
    <div style={{display:'flex',justifyContent:'center',marginTop:'30px'}}>
        <div>
      <CountdownCircleTimer
        isPlaying
        duration={seconds}
        colors={['#0288d1', '#f00']}
        colorsTime={[seconds,30]}
      >
        {() => (
        <div style={{display:'flex',flexDirection:'row'}}>
          <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
            <h3 style={{marginBlock:'0px',paddingInline:'10px'}}>{time.hours}</h3>
            <p style={{fontSize:'10px'}}>Hours</p>
        </div>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
            <h3 style={{marginBlock:'0px',paddingInline:'10px'}}>{time.minutes}</h3>
            <p style={{fontSize:'10px'}}>Minutes</p>
        </div>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
            <h3 style={{marginBlock:'0px',paddingInline:'10px'}}>{time.seconds}</h3>
            <p style={{fontSize:'10px'}}>Seconds</p>
        </div>
        </div>
        )}
      </CountdownCircleTimer>
    </div>
      </div>
  );
};

export default Countdown;
