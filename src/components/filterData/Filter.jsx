import React, { useContext, useEffect, useState } from "react";
import { appContext } from "../../App";
import fallBackImg from "../../images/pnf.jpg";
function Filter() {
  // useContext for
  let data = useContext(appContext);
  const [message, setMessage] = useState(false);
  // When Page Render Then Api Data Store In The Context Api
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((val) => {
        data.setItem(val.products);
        data.setClone(val.products);
      });
  }, []);
  // Search Handler Function
  const searchHandler = (e) => {
    // Make a local array
    let temp = [];
    if (e.target.value.length >= 2) {
      for (let i = 0; i < data.clone.length; i++) {
        if (
          data.clone[i].title
            .toLowerCase()
            .startsWith(e.target.value.toLowerCase())
        ) {
          temp.push(data.clone[i]);
          setMessage(false);
        } else {
          setMessage(true);
        }
      }
      data.setItem(temp);
    } else if (e.target.value.length === 0) {
      data.setItem(data.clone);
      setMessage(false);
    }
  };
  return (
    <div>
      <h1>Filter data items</h1>
      <div class="input-group mb-3 search">
        <span class="input-group-text" id="basic-addon1">
          <i class="fas fa-search"></i>
        </span>
        <input
          onChange={searchHandler}
          type="text"
          class="form-control"
          placeholder="search..."
          aria-label="dataname"
          aria-describedby="basic-addon1"
        />
      </div>
      <center>
        {data.item.length !== 0 ? (
          data.item.map((val, index) => (
            <div
              key={index}
              className="card"
              style={{
                width: "18rem",
                display: "inline-block",
                margin: "1em",
              }}
            >
              <img
                style={{ height: "250px" }}
                src={val.thumbnail}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 style={{ height: "60px" }} className="card-title">
                  {val.title}
                </h5>
                <p
                  style={{
                    height: "120px",
                    textAlign: "justify",
                    color: "gray",
                  }}
                  className="card-text"
                >
                  {val.description}
                </p>
                <span style={{ float: "left" }}>
                  Price <span>${val.price}&nbsp;</span>
                </span>

                <span style={{ marginLeft: "4em" }}>
                  <span>
                    {val.rating}
                    <i style={{ color: "yellow" }} className="fas fa-star"></i>
                  </span>
                </span>
              </div>
            </div>
          ))
        ) : data.item.length === 0 && message === false ? (
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        ) : (
          <>
            {/* Fallback Image Display */}
            <div>
              <img
                style={{ width: "50%" }}
                src={fallBackImg}
                alt="fallbackImg"
              />
            </div>
          </>
        )}
      </center>
    </div>
  );
}

export default Filter;
