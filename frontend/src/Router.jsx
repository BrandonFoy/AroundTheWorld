import React from "react";
import {Routes, Route } from 'react-router-dom'
import Favorites from "./containers/Favorites.jsx";
import Main from "./containers/Main.jsx";
import Places from "./containers/Places.jsx";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Main/>} />
        <Route exact path="/Favorites" element={<Favorites/>} />
        <Route exact path="/Places" element={<Places/>} />
      </Routes>  
    </>
  );
};

export default Routers;