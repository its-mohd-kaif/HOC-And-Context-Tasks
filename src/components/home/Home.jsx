import React from "react";
import { Link } from "react-router-dom";
// This is Home(Landing Page) Component
function Home() {
  return (
    <section>
      <h1 className="mt-2">
        Higher Order Components and Context Optional tasks
      </h1>
      <hr></hr>
      <div className="d-grid gap-2 card">
        <div
          style={{
            textAlign: "center",
            fontSize: "22px",
            fontWeight: "bolder",
          }}
        >
          Task 1
        </div>
        <Link to={"/login"} className="btn btn-primary" type="button">
          Authentication
        </Link>
      </div>
      <hr></hr>
      <div className="d-grid gap-2 card">
        <div
          style={{
            textAlign: "center",
            fontSize: "22px",
            fontWeight: "bolder",
          }}
        >
          Task 2
        </div>
        <Link to={"/shopping"} className="btn btn-primary" type="button">
          Shopping cart
        </Link>
      </div>
      <hr></hr>
      <div className="d-grid gap-2 card">
        <div
          style={{
            textAlign: "center",
            fontSize: "22px",
            fontWeight: "bolder",
          }}
        >
          Task 3
        </div>
        <Link to={"/filter"} className="btn btn-primary" type="button">
          Filter Data Item
        </Link>
      </div>
      <hr></hr>
      <div className="d-grid gap-2 card">
        <div
          style={{
            textAlign: "center",
            fontSize: "22px",
            fontWeight: "bolder",
          }}
        >
          Task 4,5
        </div>
        <Link
          to={"/debounceAndLoader"}
          className="btn btn-primary"
          type="button"
        >
          Debounce functionality And Loader
        </Link>
      </div>
      <hr></hr>
    </section>
  );
}

export default Home;
