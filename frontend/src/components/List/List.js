import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./List.styles.css";

import MyContext from "../../libs/MyContext";

const List = () => {
  let navigate = useNavigate();
  const { setMyStop } = useContext(MyContext);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [savedLocations, setSavedLocations] = useState([]);
  const [deletedLocation, setDeletedLocation] = useState();

  // useEffect Hook
  const BASE_URL = "/locations";
  useEffect(() => {
    // Set title
    document.title = `To Go List`;
    //   API CALL
    const getLocation = async () => {
      try {
        setLoading(true);
        const response = await axios.get(BASE_URL);
        console.log("Axios is working");
        console.log(response);
        const { data } = response;
        setSavedLocations(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
        console.log(error);
      }
    };
    // Invoke API CALL
    getLocation();
    // Call reloads each time a location is deleted
  }, [deletedLocation]);

  const handleClick = (id) => {
    setMyStop(id);
    navigate("/trains");
  };

  const deleteLocation = async (id) => {
    try {
      const { data } = await axios.delete(
        "http://localhost:5000/api/v1/locations/delete/" + id
      );
      console.log(data);
      setDeletedLocation(id);
    } catch (error) {
      console.log(error);
    }
  };

  if (!savedLocations) return <p>No Planned trains...</p>;

  return (
    <div className='container'>
      <h1>To Go List</h1>
      <p>Double Click to delete</p>
      {loading && <p>Loading...</p>}
      {error && <p>Error!</p>}
      <ul>
        {savedLocations &&
          savedLocations
            .slice(0)
            .reverse()
            .map((data) => (
              <li
                key={data.identifier}
                id={data.identifier}
                name={data.name}
                onDoubleClick={() => deleteLocation(data.identifier)}>
                <p>{data.updatedAt.substring(0, 10)}</p>
                <h4>{data.name}</h4>
                <button
                  className='nextButton'
                  onClick={() => handleClick(data.identifier)}>
                  View Next Train
                </button>
              </li>
            ))}
      </ul>
    </div>
  );
};

export default List;
