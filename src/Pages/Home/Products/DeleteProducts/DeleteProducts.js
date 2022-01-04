import React, { useEffect, useState } from "react";

const DeleteProducts = () => {
  const [products, setProducts] = useState([]);
  const [isDeleted, setIsDeleted] = useState(null);

  useEffect(() => {
    fetch(`https://car6666.herokuapp.com/services`)
      .then((res) => res.json())
      .then((result) => setProducts(result));
  }, [isDeleted]);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (proceed) {
      fetch(`http://localhost:5000/deleteProducts/${id}`, {
        method: "DELETE",
        headers: { "content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.deletedCount) {
            setIsDeleted(true);
          } else {
            setIsDeleted(false);
          }
        });

      console.log(id);
    }
  };
  return (
    <div>
      <h2>Total Products:{products.length}</h2>

      <ui>
        {products.map((product) => (
          <li>
            {" "}
            Product ID: {product._id}
            <br />
            Product Name: {product.name}
            <br />
            <button onClick={() => handleDelete(product._id)}>Delete</button>
          </li>
        ))}
      </ui>
    </div>
  );
};

export default DeleteProducts;
