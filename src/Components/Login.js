import React from "react";
import { Link } from "react-router-dom";
export default class Login extends React.Component {
  state = {
    error: null,
  };
  /*
  handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    this.setState({ error: null });
    const user = { email: email.value, password: password.value };

    AuthAPIService.loginUser(user)
      .then((loginResponse) => {
        TokenService.saveAuthToken(loginResponse.authToken);
        this.props.history.push("/home");
      })
      .then((res) => {
        const options = {
          method: "GET",
          headers: {
            Authorization: `Bearer ${TokenService.hasAuthToken()}`,
            Accept: "application/json",
          },
        };
        fetch(`${API_BASE_URL}/api/users`, options)
          .then((res) => {
            if (!res.ok) {
              return Promise.reject(res.statusText);
            }
            return res.json();
          })
          .then((user) => this.context.loginUser(user))
          .catch((res) => {
            this.setState({ error: res.error });
          });
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };
  */
  render() {
    return (
      <section>
        <h3>Login</h3>
        <form
          className="form"
          aria-label="login-form"
          onSubmit={this.handleLogin}
        >
          {this.state.error && <p className="error">{this.state.error}</p>}
          <fieldset aria-label="email">
            <div className="flex-wrap">
              <label className="login-email" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                placeholder="email"
                id="email"
                name="email"
                onChange={(e) => console.log(e)}
              />
            </div>
            <div className="flex-wrap">
              <label htmlFor="password" className="login-pw">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="password"
                name="password"
                onChange={(e) => console.log(e)}
              />
            </div>

            <button className="login" type="submit" aria-label="login">
              Login
            </button>
          </fieldset>
        </form>
      </section>
    );
  }
}
