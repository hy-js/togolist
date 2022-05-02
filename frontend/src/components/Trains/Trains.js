//  DONE:
// Add train station to DB and To go List
// SHow next train for station in list
// Delete train station form to go list

import React, { useEffect, useState, useContext } from "react";
import axios from "axios";

// Components
import MyContext from "../../libs/MyContext";
import NextTrain from "../NextTrain/NextTrain";

// Styles
import { Wrapper, SearchIcon, SearchButton } from "./Trains.styles.js";

const Trains = () => {
  // Context
  const [location, setLocation] = useState();
  const { myStop, setMyStop } = useContext(MyContext);

  // useState Hook
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Search States
  const [query, setQuery] = useState("");
  const [url, setURL] = useState(
    `https://v5.db.transport.rest/locations?query=${query}`
  );

  // useEffect Hook
  useEffect(() => {
    if (query.length > 0) {
      // Set title
      document.title = `Next Train Search`;
      //   API CALL
      const getLocation = async () => {
        try {
          setLoading(true);
          const response = await axios.get(url);
          console.log("Axios is working");
          console.log(response);
          let { data } = response;
          setLocation(data);
          setLoading(false);
        } catch (error) {
          setLoading(false);
          setError(error);
          console.log(error);
        }
      };
      // Invoke API CALL
      getLocation();
    }
  }, [url]);

  // Functions
  // TODO:
  const handleClick = (id) => {
    setMyStop(id);
  };

  console.log(query);
  return (
    <Wrapper className='container'>
      <h1>Trains</h1>
      <div className='trains'>
        {/* Print all JSON data on page for dev purposes */}
        {/* <pre>{JSON.stringify(location, null, 2)}</pre> */}
        {!myStop ? (
          <div>
            <h2>Search</h2>
            <input
              autoFocus
              type='text'
              placeholder='Search a train station..'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <SearchButton
              type='button'
              onClick={() =>
                setURL(`https://v5.db.transport.rest/locations?query=${query}`)
              }>
              <SearchIcon />
            </SearchButton>
            {loading && <p>Loading...</p>}
            {error && <p>Problem getting data...</p>}
            <ul>
              {location &&
                location.map((data) => (
                  <li key={data.id} onClick={() => handleClick(data.id)}>
                    {data.name}
                  </li>
                ))}
            </ul>
          </div>
        ) : (
          <div>
            <h2>Next Train</h2>
            <br />
            <NextTrain />
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default Trains;
