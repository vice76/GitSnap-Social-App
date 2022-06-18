import { useRef } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import "./register.css";

export default function Register() {
  const email = useRef();
  const password = useRef();
  const username = useRef();
  const passwordAgain = useRef();
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        axios.post("http://localhost:8800/api/auth/register", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Lamasocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Username"
              ref={username}
              required
              className="loginInput"
            />
            <input
              placeholder="Email"
              required
              ref={email}
              type="email"
              className="loginInput"
            />
            <input
              placeholder="Password"
              ref={password}
              required
              minLength={6}
              type="password"
              className="loginInput"
            />
            <input
              placeholder="Password Again"
              ref={passwordAgain}
              required
              className="loginInput"
              type="password"
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <button className="loginRegisterButton">Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}
