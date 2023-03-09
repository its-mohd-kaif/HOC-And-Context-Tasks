import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { appContext } from "../../App";
import "./Login.css";
function Login() {
  // Ref For Input Fields
  const usernameRef = useRef();
  const passwordRef = useRef();
  // Message State For Alert Box
  const [message, setMessage] = useState("");
  // useContext For Storing User Details
  let user = useContext(appContext);
  let navigate = useNavigate();
  // Login Handler
  const loginHandler = (e) => {
    e.preventDefault();
    let tempUsername = "alex";
    let tempPassword = "alex123";
    // Check Validation
    if (usernameRef.current.value === "") {
      setMessage("username field can not be empty !!");
      usernameRef.current.focus();
    } else if (passwordRef.current.value === "") {
      setMessage("password field can not be empty !!");
      passwordRef.current.focus();
    } else if (usernameRef.current.value !== tempUsername) {
      usernameRef.current.focus();
      setMessage("wrong username !!");
    } else if (passwordRef.current.value !== tempPassword) {
      passwordRef.current.focus();
      setMessage("wrong password !!");
    } else {
      let obj = {
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      };
      // Set into Context State
      user.setLogin(obj);
      navigate("/dashboard");
    }
  };
  return (
    <div className="signup__container">
      <center>
        <form className="signup" onsubmit="return false" autocomplete="off">
          <h1>Login</h1>
          <div className="signup__field">
            <input
              autoFocus
              ref={usernameRef}
              className="signup__input"
              type="text"
              name="username"
              id="username"
              required
            />
            <label className="signup__label" for="username">
              Username
            </label>
          </div>

          <div className="signup__field">
            <input
              ref={passwordRef}
              className="signup__input"
              type="password"
              name="password"
              id="password"
              required
            />
            <label className="signup__label" for="password">
              Password
            </label>
          </div>
          <button onClick={loginHandler} className="button">
            Log in
          </button>
          <div>
            username: alex
            <aside>password: alex123</aside>
          </div>
          <br></br>
          {message !== "" ? (
            <div
              class="alert alert-warning alert-dismissible fade show"
              role="alert"
            >
              {message}
              <button
                type="button"
                class="btn-close"
                onClick={() => setMessage("")}
              ></button>
            </div>
          ) : null}
        </form>
      </center>
    </div>
  );
}

export default Login;
