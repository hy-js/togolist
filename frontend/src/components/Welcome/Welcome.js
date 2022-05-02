// DONE:

// TODO:
// CREATE RANDOM USER SELECTOR
//  FIX REACT WARNINGS

import React, { useContext } from "react";
import { Link } from "react-router-dom";

import "./Welcome.styles.css";

import MyContext from "../../libs/MyContext";
import Random from "../Random/Random";

const Welcome = () => {
  const { myStop, setMyStop } = useContext(MyContext);

  return (
    <>
      <div className='container'>
        <Random />
        {myStop ? (
          <>
            <h2>Default train station is set to:</h2>
            <h3>{myStop}</h3>
            <button onClick={() => setMyStop("")}>Reset</button>
          </>
        ) : (
          <>
            <h2>Search to set a default train station</h2>
            <Link to='/trains'>
              <button>Search Trains</button>
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default Welcome;
