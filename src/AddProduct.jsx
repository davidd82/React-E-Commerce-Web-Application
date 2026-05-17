import React, { useState } from "react";
import "./AddProduct.css";

export default function AddProduct({ onAddProduct }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); 

    const newProduct = {
      name,
      image,
      price: Number(price), 
      rating
    };

    onAddProduct(newProduct);

    setName("");
    setPrice("");
    setImage("");
    setRating("");
  }

  return (
    <div className="container py-5">
      <h2>Add a Product</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Product Name:</label>
          <input
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Price:</label>
          <input
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Image:</label>
          <input
            className="form-control"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Rating:</label>
          <input
            className="form-control"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    </div>
  );
}