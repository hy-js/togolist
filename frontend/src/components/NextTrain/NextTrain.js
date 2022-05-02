import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./NextTrain.styles.css";

import MyContext from "../../libs/MyContext";

const NextTrain = () => {
  let navigate = useNavigate();
  const { myStop, setMyStop } = useContext(MyContext);
  // useState Hook
  const [departure, setDeparture] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const BASE_URL = `https://v5.db.transport.rest/stops/${myStop}/departures?`;
  // useEffect Hook
  useEffect(() => {
    //   API CALL
    const getDeparture = async () => {
      try {
        setLoading(true);
        const response = await axios.get(BASE_URL);
        console.log("Axios is working");
        let { data } = response;
        console.log(data[0]);
        setDeparture(data[0]);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
        console.log(error);
      }
    };
    // Invoke API CALL
    getDeparture();
  }, [myStop]);

  const handleClick = async (id) => {
    console.log(id);
    console.log(departure.destination.name);
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/v1/locations/add",
        {
          name: departure.destination.name,
          identifier: id
        }
      );
      console.log(data);
      navigate("/list");
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  if (!departure) return <p>No Planned trains...</p>;
  console.log(myStop);

  return (
    <>
      {/* <pre>{JSON.stringify(departure, null, 2)}</pre> */}
      {departure && (
        <>
          <h3>From: {departure.stop.name}</h3>
          <h3 className='time'>{departure.plannedWhen.substring(11, 19)}</h3>
          {departure.plannedPlatform && (
            <p>Platform: {departure.plannedPlatform}</p>
          )}

          <h3>To: {departure.destination.name}</h3>
          <button onClick={() => handleClick(departure.stop.id)}>
            Add {departure.destination.name} to To Go List
          </button>
        </>
      )}
    </>
  );
};

export default NextTrain;
