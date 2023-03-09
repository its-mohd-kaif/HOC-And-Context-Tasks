import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { appContext } from "../../App";
import "./Dashboard.css";
function Dashboard() {
  // Dashboard Component
  let user = useContext(appContext);
  return (
    <div class="dashboard">
      <div class="dashboard__admin">
        <div class="dashboard__title">Dashboard</div>
        <div>
          <button class="dashboard__button">Options</button>
        </div>
        <div>
          <button class="dashboard__button">Static Pages</button>
        </div>
        <div>
          <button class="dashboard__button">Posts</button>
        </div>
        <div>
          <button class="dashboard__button">Modules</button>
        </div>
        <div>
          <button class="dashboard__button">Navigation Links</button>
        </div>
        <div>
          <button class="dashboard__button">Mailinig List</button>
        </div>
        <div>
          <button class="dashboard__button">Themes</button>
        </div>
        <div class="dashboard__button d-grid gap-2 col-12 mx-auto">
          <Link to={"/login"} class="btn btn-dark" type="button">
            Login
          </Link>
          <Link to={"/"} class="btn btn-dark" type="button">
            Home
          </Link>
        </div>
      </div>
      <div class="dashboard__navigation m-3">
        <table
          style={{ width: "70%", textAlign: "center" }}
          class="table table-success table-striped table-hover"
        >
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>{user.login.username}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
