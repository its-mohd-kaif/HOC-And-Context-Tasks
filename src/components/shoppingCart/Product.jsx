import React, { useContext } from "react";
import { appContext } from "../../App";
import { products } from "../../data/Data";
import "./Product.css";

function Product() {
  // useContext for storing data into context state state
  let user = useContext(appContext);
  // Add To Cart Handler
  const addToCart = (e) => {
    let productId = e;
    productId = Number(productId);
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === productId) {
        for (let k = 0; k < user.data.length; k++) {
          if (user.data[k].id === productId) {
            alert("Item Already In Your Cart !!");
            return;
          }
        }
        user.data.push(products[i]);
        user.setData([...user.data]);
      }
    }
  };
  return (
    <div>
      {/* Products Display */}
      {products.map((t) => (
        <div id="main">
          <div id="products">
            <div className="product">
              <img className="productImg" src={t.image} alt="" />
              <h3 className="title">
                <a href="/"> {t.name}</a>
              </h3>
              <span>Price ${t.price}</span>
              <a
                href="#01"
                onClick={() => {
                  addToCart(t.id);
                }}
                className="add-to-cart"
              >
                Add To Cart
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product;
