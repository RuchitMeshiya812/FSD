import React, { useState, useEffect } from "react";

function WelcomeMessage() {
   const [dateTime, setDateTime] = useState(new Date());

   useEffect(() => {
      const interval = setInterval(() => {
         setDateTime(new Date());
      }, 1000);

      return () => clearInterval(interval); // Cleanup on component unmount
   }, []);

   const formatDate = (date) => {
      return date.toLocaleDateString("en-GB"); // Format: 9/9/24
   };

   const formatTime = (date) => {
      return date.toLocaleTimeString(); // Format: 9:46:41 PM
   };

   return (
      <div>
         <h1>Welcome to CHARUSAT!!!</h1>
         <p>DATE: IT IS {formatDate(dateTime)}</p>
         <p>TIME: IT IS {formatTime(dateTime)}</p>
      </div>
   );
}

export default WelcomeMessage;
