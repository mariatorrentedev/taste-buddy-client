import React from "react";

export default class Signup extends React.Component {
  state = {
    error: null,
  };
  /*
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = e.target;
    this.setState({ error: null });

    if (password.value !== confirmPassword.value) {
      return this.setState({ error: "Passwords do not match" });
    
      .then((user) => {
        this.props.history.push("/login");
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };
 */
  render() {
    return (
      <section>
        <h3>Start your TasteBuddy journey today!</h3>
        <form
          className="form"
          aria-label="signup-form"
          onSubmit={this.handleSubmit}
        >
          {this.state.error && <p className="error">{this.state.error}</p>}
          <fieldset>
            <div className="flex-wrap">
              <label htmlFor="name">Name: </label>
              <input type="text" placeholder="name" name="name" id="name" />
            </div>
            <div className="flex-wrap">
              <label htmlFor="new-email">Email:</label>
              <input
                type="email"
                placeholder="email"
                name="email"
                id="new-email"
              />
            </div>
            <div className="flex-wrap">
              <label htmlFor="new-password">Password</label>
              <input
                id="new-password"
                type="password"
                placeholder="new password"
                name="password"
              />
              <label htmlFor="confirm-password">Confirm password</label>
              <input
                id="confirm-password"
                type="password"
                placeholder="type password again"
                name="confirmPassword"
              />
            </div>
            <button type="submit" aria-label="signup">
              Sign Up
            </button>
          </fieldset>
        </form>
      </section>
    );
  }
}
