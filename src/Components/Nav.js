import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default class Nav extends React.Component {
  render() {
    return (
      <header>
        <section className="logo">
          <Link to="/home">
            <h1>TasteBuddy</h1>
          </Link>
        </section>
        <nav className="nav">
          <ul className="menu">
            <Link to="/logout">
              <button className="login" aria-label="login-button" type="submit">
                Logout
              </button>
            </Link>
            <Link to="/tastings/add">
              <li>+Tasting</li>
            </Link>
            <Link to="/tastings">
              <li>Wines</li>
            </Link>
            <Link to="/dashboard">
              <li>Dashboard</li>
            </Link>
          </ul>
        </nav>
      </header>
    );
  }
}
