import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { appContext } from "../../App";

import "./Navbar.css";
import Product from "./Product";
// This is Navbar Component
function Navbar() {
  let user = useContext(appContext);
  return (
    <>
      <div className="fixed-top navbarDiv">
        <Link to={"/cart"} className="cart">
          <i class="fas fa-shopping-cart"></i> Cart {user.data.length}
        </Link>
      </div>
      <Product />
    </>
  );
}

export default Navbar;
