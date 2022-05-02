import React, { useContext } from "react";

import MyContext from "../../libs/MyContext";

import "./Toggle.styles.css";

const Toggle = () => {
  const { theme, toggleTheme } = useContext(MyContext);

  return (
    <>
      <label htmlFor='toggle'>{theme === "light" ? "☀️" : "🌙"}</label>
      <input
        type='checkbox'
        id='toggle'
        className='toggle'
        name='toggle'
        onChange={toggleTheme}
      />
    </>
  );
};

export default Toggle;
