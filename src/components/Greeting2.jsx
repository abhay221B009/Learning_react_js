import React from "react";

const Greeting2 = () => {
  const greet = "HELLO THERE!!!";
  const name = "John";
  const newDate = () => new Date().toLocaleDateString();

  return (
    <div>
      <h1>GREETINGS---{greet}</h1>
      <p>Current Date and Time: {newDate()}</p>
      <p>User Name: {name}</p>
    </div>
  );
};

export default Greeting2;
