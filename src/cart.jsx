import { useLocation, useNavigate } from "react-router-dom";

function Cart() {
  const location = useLocation();
  const navigate = useNavigate();
  const { quantities = {}, serviceInfo = {} } = location.state || {};

  const selectedKeys = Object.keys(quantities).filter((key) => quantities[key] > 0);
  const total = selectedKeys.reduce(
    (sum, key) => sum + serviceInfo[key].price * quantities[key],
    0
  );

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {selectedKeys.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {selectedKeys.map((key) => (
            <div key={key} className="cart-item">
              <span>{serviceInfo[key].title}</span>
              <span>Qty: {quantities[key]}</span>
              <span>${serviceInfo[key].price * quantities[key]}</span>
            </div>
          ))}
          <div className="cart-total">Total: ${total}</div>
        </>
      )}
      <button className="back-btn" onClick={() => navigate(-1)}>
        Back to Services
      </button>
      
    </div>
  );
}

export default Cart;