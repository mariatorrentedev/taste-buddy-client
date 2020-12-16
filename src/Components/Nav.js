import React from "react";
import { Link } from "react-router-dom";
import TokenService from "../services/token-service";
import "./Nav.css";

export default class Nav extends React.Component {
  logout = () => {
    TokenService.clearAuthToken();
    this.props.history.push("/");
  };

  render() {
    return (
      <header>
        <section className="logo">
          <h1>
            <Link to="/">TasteBuddy</Link>
          </h1>
        </section>
        <nav className="nav">
          <ul className="menu">
            {/*TokenService.hasAuthToken() ? ( */}
            <>
              <li>
                <Link
                  to="/login"
                  className="login"
                  aria-label="logout-button"
                  type="submit"
                  onClick={() => this.logout}
                >
                  <img src="/images/logout.png" alt="logout-icon" />
                </Link>
              </li>
              <li>
                <Link to="/tastings/add">+Tasting</Link>
              </li>
              <li>
                <Link to="/tastings">Wines</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard </Link>
              </li>
            </>
            {/* ) : ( */}
            <>
              <li>
                <Link
                  to="/login"
                  className="login button"
                  aria-label="login-button"
                  type="submit"
                >
                  <img src="/images/login.png" alt="login-icon" />
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="singup"
                  aria-label="singup-button"
                  type="submit"
                >
                  <img src="/images/singup.png" alt="singup-icon" />
                </Link>
              </li>
            </>
            {/* ) */}
          </ul>
        </nav>
      </header>
    );
  }
}
