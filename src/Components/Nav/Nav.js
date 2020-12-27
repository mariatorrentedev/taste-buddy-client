import React from "react";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";
import Context from "../../Context";
import "./Nav.css";

export default class Nav extends React.Component {
  static contextType = Context;
  logout = (e) => {
    e.preventDefault();
    TokenService.clearAuthToken();
    this.context.logout();
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
            {TokenService.hasAuthToken() ? (
              <>
                <li>
                  <a
                    href="/logout"
                    className="logout"
                    aria-label="logout"
                    type="submit"
                    onClick={(e) => this.logout(e)}
                  >
                    <img src="/images/logout.png" alt="logout-icon" />
                  </a>
                </li>
                <li>
                  <Link to="/tastings/add">+Tasting</Link>
                </li>
                <li>
                  <Link to="/tastings">Tastings</Link>
                </li>
                <li>
                  <Link to="/dashboard">Dashboard </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/login"
                    className="login button"
                    aria-label="login-button"
                    type="submit"
                  >
                    <img src="/images/login.png" alt="login-icon" />
                    <p>Login</p>
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
                    <p>Singup</p>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
    );
  }
}
