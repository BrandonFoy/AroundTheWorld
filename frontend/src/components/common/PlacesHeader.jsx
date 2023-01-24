import React from "react";
import {Link} from "react-router-dom";
import IM from "../../assets/img/icon.svg"
import '../common/Search'
import Search from "../common/Search";


const PlacesHeader = () => {
  return (
    <>
      <header>
        <div classname="places-header">
          <div className="header">
            <nav className="navbar">
              <div className="logo">
                <Link title="home" to="/"><img src={ IM } alt="Icon" /></Link>
                <Link title="home" to="/"> Around The World </Link>
              </div>
              <Link className="favorites" to="/Favorites"> Favorites </Link>
              <Search/>
            </nav>
          </div>
        </div>    
      </header>
    </>
  );
}

export default PlacesHeader;
