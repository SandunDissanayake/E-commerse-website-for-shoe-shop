import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap

const SingleProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    category: '',
    imageUrl: ''
  });

  const [products, setProducts] = useState([]); // Store all added products
  const [editingProductId, setEditingProductId] = useState(null); // ID of the product being edited

  // Fetch all products from backend on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/product/getAllProducts');
      setProducts(response.data || []);
    } catch (error) {
      console.error('Error fetching products:', error.response ? error.response.data : error.message);
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  // Handle form submission for adding/updating a product
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      if (editingProductId) {
        // Update product if in editing mode
        await axios.put(`http://localhost:8080/api/v1/product/updateProduct/${editingProductId}`, product);
        alert('Product updated successfully');
      } else {
        // Add new product
        await axios.post('http://localhost:8080/api/v1/product/createProduct', product);
        alert('Product added successfully');
      }

      // Reset the form and fetch the updated product list
      setProduct({
        name: '',
        price: '',
        description: '',
        category: '',
        imageUrl: ''
      });
      setEditingProductId(null);
      fetchProducts();

    } catch (error) {
      console.error('Error adding/updating product:', error.response || error.message);
      alert('Error adding/updating product');
    }
  };

  // Handle delete product
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/v1/product/deleteProduct/${id}`);
      alert('Product deleted successfully');
      fetchProducts(); // Refresh the product list
    } catch (error) {
      console.error('Error deleting product:', error.response || error.message);
      alert('Error deleting product');
    }
  };

  // Handle edit product
  const handleEdit = (product) => {
    setProduct(product); // Set product data in the form for editing
    setEditingProductId(product.id); // Set the product ID for update mode
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-lg">
        <h2 className="text-center">{editingProductId ? 'Edit Product' : 'Add New Product'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label>Product Name:</label>
            <input
              className="form-control"
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label>Price:</label>
            <input
              className="form-control"
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label>Description:</label>
            <input
              className="form-control"
              type="text"
              name="description"
              value={product.description}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label>Category:</label>
            <input
              className="form-control"
              type="text"
              name="category"
              value={product.category}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label>Image URL:</label>
            <input
              className="form-control"
              type="text"
              name="imageUrl"
              value={product.imageUrl}
              onChange={handleChange}
              required
            />
          </div>
          <button className="btn btn-primary w-100" type="submit">
            {editingProductId ? 'Update Product' : 'Add Product'}
          </button>
        </form>
      </div>

      <hr />

      {/* Product list table */}
      <div className="table-responsive">
        <h2 className="text-center my-4">Products List</h2>
        <table className="table table-bordered table-hover table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((prod) => (
                <tr key={prod.id}>
                  <td>{prod.name}</td>
                  <td>{prod.price}</td>
                  <td>{prod.description}</td>
                  <td>
                    <img src={prod.imageUrl} alt={prod.name} width="50" className="img-thumbnail" />
                  </td>
                  <td>
                    <button className="btn btn-warning btn-sm mx-2" onClick={() => handleEdit(prod)}>
                      <i className="fas fa-edit"></i> Edit
                    </button>
                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(prod.id)}>
                      <i className="fas fa-trash"></i> Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">No products available.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SingleProduct;
