import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CustomerService() {
  const [quantities, setQuantities] = useState({
    ser1: 0,
    ser2: 0,
    ser3: 0,
    ser4: 0,
  });

  const navigate = useNavigate();

  const increment = (key) => {
    setQuantities((prev) => ({ ...prev, [key]: prev[key] + 1 }));
  };

  const decrement = (key) => {
    setQuantities((prev) => ({ ...prev, [key]: Math.max(prev[key] - 1, 0) }));
  };

  const renderButton = (key) => {
    return quantities[key] === 0 ? (
      <button className="addbtn" onClick={() => increment(key)}>
        Add
      </button>
    ) : (
      <div className="stepper">
        <button onClick={() => decrement(key)}>-</button>
        <span>{quantities[key]}</span>
        <button onClick={() => increment(key)}>+</button>
      </div>
    );
  };

 
  const serviceInfo = {
    ser1: { title: "Repair and Maintenance", price: 50 },
    ser2: { title: "Cleaning and Help", price: 35 },
    ser3: { title: "Renovation and Construction", price: 60 },
    ser4: { title: "Installation and Help", price: 25 },
  };

  const totalItems = Object.values(quantities).reduce((sum, q) => sum + q, 0);

  const viewCart = () => {
    navigate("/cart", { state: { quantities, serviceInfo } });
  };

  return (
    <div className="cs">
    <div className="head-wrapper">
  <span className="head-tag">✦ Trusted by 2,000+ customers</span>
  <h1 className="head">List of <span className="accent">Services</span> we provide</h1>
  <p className="head-subtitle">Reliable home and repair services, booked in minutes</p>
</div>
       
    <div className="parent">
  <div className="ser1">
    <div className="ser-text-block">
      <span className="ser-text1">Repair and Maintenance</span>
      <p className="info1">Price = $50</p>
      {renderButton("ser1")}
    </div>
    <div className="ser-img-wrap">
      <img src="/electrical.jpg" className="ser-img1" alt="Repair and Maintenance" />
    </div>
  </div>

  <div className="ser2">
    <div className="ser-text-block">
      <span className="ser-text2">Cleaning and Help</span>
      <p className="info2">Price = $35</p>
      {renderButton("ser2")}
    </div>
    <div className="ser-img-wrap">
      <img src="/cleaning.jpg" className="ser-img2" alt="Cleaning" />
    </div>
  </div>

  <div className="ser3">
    <div className="ser-text-block">
      <span className="ser-text3">Renovation and Construction</span>
      <p className="info3">Price = $60</p>
      {renderButton("ser3")}
    </div>
    <div className="ser-img-wrap">
      <img src="/reforma integr.jpg" className="ser-img3" alt="Renovation and Construction" />
    </div>
  </div>

  <div className="ser4">
    <div className="ser-text-block">
      <span className="ser-text4">Installation and Help</span>
      <p className="info4">Price = $25</p>
      {renderButton("ser4")}
    </div>
    <div className="ser-img-wrap">
      <img src="/Astrology.jpg" className="ser-img4" alt="Installation" />
    </div>
  </div>
</div>

      {totalItems > 0 && (
        <button className="cart-btn" onClick={viewCart}>
          View Cart ({totalItems})
        </button>
      )}
    </div>
  );
}

export default CustomerService;