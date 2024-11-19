import React from "react";
import ReactDOM from "react-dom/client";

function Car(){
    return <h1>I am a Car!!!</h1>
  }
  
function Garage(){
    return(
      <>
      <h1>who are you???</h1>
      <Car/>
      </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage/>);

export default Garage;
  