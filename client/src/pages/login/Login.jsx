import React, { useRef, useContext } from "react";
import "./login.css";
import { AuthContext } from "../../context/AuthContext";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { loginCall } from "../../apiCalls";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    // console.log(email.current.value);
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };
  console.log(isFetching);
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
              placeholder="Email"
              type="email"
              required
              ref={email}
              className="loginInput"
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength={6}
              ref={password}
              className="loginInput"
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="secondary" size="20px" />
              ) : (
                // <h1>loading...</h1>
                "Log In"
              )}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              {isFetching ? (
                <CircularProgress color="secondary" size="20px" />
              ) : (
                // <h1>loading...</h1>
                "Create a New Account"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
