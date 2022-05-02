import React, { useState, useEffect } from "react";
import axios from "axios";

const Random = () => {
  const [random, setRandom] = useState("");
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const getRandom = async () => {
      try {
        const response = await axios.get("/users/random");
        let { data } = response;
        setRandom(data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getRandom();
  }, [trigger]);

  const handleClick = () => {
    console.log("Button pressed");
    setTrigger(!trigger);
  };

  return (
    <>
      <h1>Random person: {random && random.username}</h1>
      <button onClick={() => handleClick()}>Get random</button>
    </>
  );
};

export default Random;
