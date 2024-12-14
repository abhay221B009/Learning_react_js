import React from "react";

const Expression = () => {
  const myName = "Abhay Raj Chauhan";
  const multiply = (a, b) => a * b;
  const specialClass = "simple-class";
  return (
    <section>
      <p>2+2= {2 + 2}</p>
      <h1>My Name is: {myName}</h1>
      <p>My Friends list: {[" alex ,", " john, ", " waheed, ", " Jordan. "]}</p>
      <p>2*10= {multiply(2, 10)}</p>
      <p className={specialClass}>THIS IS A SPECIAL CLASS</p>
    </section>
  );
};

export default Expression;
