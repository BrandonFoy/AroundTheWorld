import React from "react";
import {Link} from "react-router-dom";
import IM from "../../assets/img/background.png"
import IM2 from "../../assets/img/icon.svg"
import '../common/Search'
import Search from "../common/Search";


const Header = () => {
  return (
    <>
      <header>
        <div className="header">
          <img id="background" src={ IM } alt="" />
          <nav className="navbar">
            <div className="logo">
              <img src={ IM2 } alt="Icon" />
              <Link to="/">Around The World</Link>
            </div>
            <Link className="favorites" to="/Favorites"> Favorites </Link>
            <Search/>
          </nav>
        </div>
      </header>
      
    </>
  );
};

export default Header;
