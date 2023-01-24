import Footer from "../components/common/Footer";
import GridContent from "../components/common/GridContent";
import Header from "../components/common/Header";
import Thumbnail from "../components/common/Thumbnail";
import React from "react";
import "../assets/home.css"

const Main = () => {
  return (
    <>
      <Header /> 
      <GridContent />
      <Thumbnail />
      <Footer />
    </>
  );
}

export default Main;