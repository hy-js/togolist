import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyContext from "./libs/MyContext";

// Componenets
import Welcome from "./components/Welcome/Welcome";
import Counter from "./components/Counter/Counter";
import Trains from "./components/Trains/Trains";
import List from "./components/List/List";
import Nav from "./components/Nav/Nav";
import Error from "./pages/ErrorPage/Error";
import Footer from "./components/Footer/Footer";

// Styles
import "./App.css";

const App = (props) => {
  const [myStop, setMyStop] = useState("");
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  const userSettings = {
    myStop,
    setMyStop,
    theme,
    toggleTheme
  };

  return (
    <MyContext.Provider value={userSettings}>
      <Router>
        <div className='App' id={theme}>
          <main>
            <Nav />
            <Routes>
              <Route path='/' element={<Welcome />} />
              <Route path='/counter' element={<Counter />} />
              <Route path='/trains' element={<Trains />} />
              <Route path='/list' element={<List />} />
              <Route path='*' element={<Error />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </MyContext.Provider>
  );
};

export default App;
