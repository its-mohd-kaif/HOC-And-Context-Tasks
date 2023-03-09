import React, { useContext, useEffect, useState } from "react";
import { appContext } from "../../App";
import HigherOrderComponent from "./HigherOrderComponent";

function DebounceAndLoader({ fetchApi, loader }) {
  // Context State For Display Results
  let user = useContext(appContext);
  const [input, setInput] = useState("");
  const [flag, setFlag] = useState(false);
  // When a input state change then useEffect Call
  useEffect(() => {
    // Check Basic Validation
    if (input !== "") {
      const getData = setTimeout(() => {
        // Fetch Api Method
        fetchApi(input);
      }, 1000);
      return () => clearInterval(getData);
    }
  }, [input]);
  // Search Handler
  const searchHandler = (e) => {
    setInput(e.target.value);
    if (e.target.value.length !== 0) {
      setFlag(true);
    } else if (e.target.value.length === 0) {
      setFlag(false);
      user.setResult({});
    }
  };
  return (
    <div>
      <br></br>
      <h1>Debounce functionality And Loader</h1>
      <br></br>
      <div className="input-group mb-3 search">
        <span className="input-group-text" id="basic-addon1">
          <i className="fas fa-search"></i>
        </span>
        <input
          onChange={searchHandler}
          type="text"
          className="form-control"
          placeholder="github username..."
          aria-label="dataname"
          aria-describedby="basic-addon1"
        />
      </div>
      <br></br>
      {/* conditional rendering */}
      {user.result.login !== undefined ? (
        <div class="card" style={{ width: "18rem" }}>
          <img src={user.result.avatar_url} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{user.result.login}</h5>
            <p class="card-text">
              Total {user.result.public_repos} public repositories{" "}
            </p>
            <a
              target={"_blank"}
              href={user.result.html_url}
              class="btn btn-dark"
              rel="noreferrer"
            >
              <i class="fab fa-github"></i> Github Profile
            </a>
          </div>
        </div>
      ) : user.result.login === undefined && flag === false ? (
        <div style={{ width: "50%", margin: "auto", background: "lightgray" }}>
          <marquee scrollAmount="10">
            <h1 style={{ color: "black" }}>Search Your Github Profile </h1>
          </marquee>
        </div>
      ) : flag === true ? (
        <center>
          <div>{loader}</div>
        </center>
      ) : null}
    </div>
  );
}

export default HigherOrderComponent(DebounceAndLoader);
