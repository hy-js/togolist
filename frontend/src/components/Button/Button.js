import React, { useState } from "react";

const Button = () => {
  const [count, setCount] = useState(0);
  const handleClick = (operator) => {
    console.log(operator);
    setCount(eval(count + operator + 1));
  };

  console.log(count);
  return <button onClick={() => handleClick("+")}>+</button>;
};

export default Button;
