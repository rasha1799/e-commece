import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const email = user.email + "";
  useEffect(() => {
    fetch(`http://localhost:5000/myOrders/${email}`)
      .then((res) => res.json())
      .then((result) => setOrders(result));
  }, []);
  return (
    <div>
      <h2>My Orders:{orders.length}</h2>
      <h2>Name: {user.displayName}</h2>
      <h2>Email: {user.email} </h2>
      <ui>
        {orders.map((order) => (
          <li> Order ID: {order._id}</li>
        ))}
      </ui>
    </div>
  );
};

export default MyOrders;
