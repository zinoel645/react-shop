import { useState, useEffect } from "react";
import { NavLink, useParams, Outlet } from "react-router-dom";
import useFetch from "./useFetch.js";

export default function ProductDetails(props) {
  const [product, setProduct] = useState({});
  const { get } = useFetch("https://react-tutorial-demo.firebaseio.com/");
  const params = useParams();

  useEffect(() => {
    get(`productinfo/id${params.id}.json`)
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => console.log("Could not load product details", error));
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="product-details-layout">
      <div>
        <h2>{product.name}</h2>
        <img
          width="125"
          height="125"
          className="product-details-image"
          alt={product.name}
          src={product.image}
        />
      </div>
      <div>
        <div className="tabs">
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "tab-active" : "")}
                to=""
                end
              >
                Details
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "tab-active" : "")}
                to="nutrition"
              >
                Nutrition
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "tab-active" : "")}
                to="storage"
              >
                Storage
              </NavLink>
            </li>
          </ul>
        </div>
        <Outlet context={product} />
      </div>
    </div>
  );
}
