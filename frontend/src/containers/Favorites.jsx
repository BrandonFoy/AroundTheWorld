import FavCard from "../components/common/Favcard";
import Footer from "../components/common/Footer";
import PlacesHeader from "../components/common/PlacesHeader";
import React from "react";
import "../assets/home.css"

const Favorites = () => {
  return (
    <>
      <PlacesHeader />
      <div>
        <h1 className="name">Favorites</h1>
      </div>
      <FavCard />
      <Footer />
    </>
  );
}

export default Favorites;