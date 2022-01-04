import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddProducts.css";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    axios.post("http://localhost:5000/products", data).then((res) => {
      if (res.data.insertedId) {
        alert("added successfully");
        reset();
      }
    });
  };

  return (
    <div className="add-Product">
      <h2>Please Add a Product</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("key", { required: true, maxLength: 20 })}
          placeholder="Key"
        />
        <input
          {...register("name", { required: true, maxLength: 20 })}
          placeholder="Name"
        />

        <textarea {...register("description")} placeholder="Description" />
        <input type="number" {...register("price")} placeholder="price" />
        <input {...register("img")} placeholder="image url" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddProduct;
