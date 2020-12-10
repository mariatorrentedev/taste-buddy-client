import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default class Nav extends React.Component {
  render() {
    return (
      <header>
        <section className="logo">
          <h1>
            <Link to="/home">TasteBuddy</Link>
          </h1>
        </section>
        <nav className="nav">
          <ul className="menu">
            <li>
              <Link
                to="/login"
                className="login"
                aria-label="login-button"
                type="submit"
              >
                <img src="./images/login.png" alt="login-icon" />
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="singup"
                aria-label="singup-button"
                type="submit"
              >
                <img src="./images/singup.png" alt="singup-icon" />
              </Link>
            </li>
            <li>
              {/*All this routes are going to be PRIVATE ROUTES*/}
              <Link className="logout" aria-label="logout-button" to="/">
                <img src="./images/logout.png" alt="logout-icon" />
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
          </ul>
        </nav>
      </header>
    );
  }
}
