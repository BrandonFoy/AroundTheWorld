import React from "react";
import { push } from "connected-react-router";
import { useDispatch } from "react-redux";
import FooterLogo from '../../assets/img/logo.svg'

function Footer() {
  const dispatch = useDispatch();

  return (
    <>
      <footer>
        <div class="copyright">
          <img src={FooterLogo} alt="logo" onClick={() => dispatch(push('/'))} />
          <p>© 2021 TripAdvisor LLC All rights reserved.</p>
        </div>
        <div class="privacy">
          <a href="/Main">Privacy Policy</a>
          <a href="/Main">Terms of Use </a>
          <a href="/Main">Sitemap</a>
        </div>
        <div class="version">
          <p>
            This is the version of our website addressed to speakers of English
            in India. If you are a resident of another country <br />
            or region, please select the appropriate versio of Tripadvisor for
            your country or region in the drop-down menu. more
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;