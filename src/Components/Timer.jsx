import React, { useEffect, useState } from "react";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set the date we're counting down to
    const countDownDate = new Date("Jan 5, 2030 18:37:25").getTime();

    // Update the countdown every 1 second
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      // Time calculations for hours, minutes, and seconds
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Update state with the new time
      setTimeLeft({ hours, minutes, seconds });

      // If the countdown is over, stop the timer
      if (distance < 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  // Render the timer for each element
  const renderTimers = () => {
    const timerElements = [];
    for (let i = 0; i < 6; i++) {
      timerElements.push(
        <div key={i} id={`timer${i}`}>
          {timeLeft.hours}h . {timeLeft.minutes}m . {timeLeft.seconds}s
        </div>
      );
    }
    return timerElements;
  };

  return (
    <div>
      {renderTimers()}
      {timeLeft.hours <= 0 && timeLeft.minutes <= 0 && timeLeft.seconds <= 0 && (
        <div id="demo">EXPIRED</div>
      )}
    </div>
  );
};

export default Timer;
