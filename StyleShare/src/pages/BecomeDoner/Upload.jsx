import React, { useState } from "react";
import api from "../../api/axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Upload = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    image: "",
    description: "",
    size: "",
    category: "",
    condition: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post("/cloths/createcloth", form, {
        withCredentials: true,
      });
      if (data.success) {
        toast.success("Cloth uploaded successfully!");
        setTimeout(() => navigate("/dashboard"), 1500);
      }
    } catch (err) {
      toast.error("Upload failed. Try again.");
      console.error(err);
    }
  };
  return (
    <div className="bg-gray-900 min-h-screen text-white py-10 px-6 md:px-20">
      <ToastContainer />
      <h1 className="text-3xl font-bold mb-6">Upload a New Cloth</h1>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
        <input
          type="text"
          name="image"
          value={form.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600 focus:outline-none"
          required
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600 focus:outline-none"
          required
        ></textarea>

        <select
          name="size"
          value={form.size}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600"
          required
        >
          <option value="">Select Size</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>

        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600"
          required
        >
          <option value="">Select Category</option>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Kids">Kids</option>
          <option value="Unisex">Unisex</option>
        </select>

        <select
          name="condition"
          value={form.condition}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600"
          required
        >
          <option value="">Select Condition</option>
          <option value="New">New</option>
          <option value="Like New">Like New</option>
          <option value="Excellent">Excellent</option>
          <option value="Good">Good</option>
        </select>

        <button
          type="submit"
          className="bg-blue-600 px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default Upload