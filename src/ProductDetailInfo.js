import { useOutletContext } from "react-router-dom";
import Button from "./Button.js";
import { useContext } from "react";
import { AppContext } from "./AppContext.js";

export default function ProductDetailInfo() {
  const product = useOutletContext();
  const app = useContext(AppContext);
  return (
    <>
      <p>
        {product.description} sold at <strong>${product.price}</strong> per
        piece.
      </p>
      <Button onClick={() => app.onProductAdd(product)}>
        ${product.price}
      </Button>
    </>
  );
}
