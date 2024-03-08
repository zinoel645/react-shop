import { useContext } from "react";
import { AppContext } from "./AppContext.js";

export default function Cart(props) {
  const app = useContext(AppContext);
  const cart = app.cart;
  const totalPrice = app.getTotalPrice();

  return (
    <div className="cart-layout">
      {cart.length === 0 && (
        <div>
          <h1>Your Cart</h1>
          <p>You have not add any product to your cart yet.</p>
        </div>
      )}
      {cart.length > 0 && (
        <table class="table table-cart">
          <thead>
            <tr>
              <th width="25%" class="th-product">
                Product
              </th>
              <th width="20%">Unit price</th>
              <th width="10%">Quanity</th>
              <th width="25%">Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => {
              return (
                <tr>
                  <td>
                    <img
                      width="30"
                      height="30"
                      alt={product.name}
                      src={product.image}
                    />
                    {product.name}
                  </td>
                  <td>${product.price}</td>
                  <td>{product.quantity}</td>
                  <td>
                    <strong>${product.price * product.quantity}</strong>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <th colSpan="2"></th>
              <th class="cart-highlight">Total amount</th>
              <th class="cart-highlight">${totalPrice}</th>
            </tr>
          </tfoot>
        </table>
      )}
    </div>
  );
}
