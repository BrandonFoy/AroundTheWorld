import React from "react";
import {Link} from "react-router-dom";
import IM from "../../assets/img/icon.svg"

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="logo">
          <img src={ IM } alt="Icon" /><Link to="/"><p>Around The World</p></Link>
        </div>
        <div className="rights">
          <p>© 2021 TripAdvisor LLC All rights reserved.</p>
        </div>  
        <div className="disclaimer">
            <Link className="links" to="/">Privacy policy</Link>
            <Link className="links" to="/">Terms of Use </Link>
            <Link className="links" to="/">Sitemap</Link>
        </div>
        <div className="version">
          <p>
            This is the version of our website addressed to speakers of English in India. If you are a resident of another country or region, please select the appropriate version of Tripadvisor for your country or region in the drop-down menu. 
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;