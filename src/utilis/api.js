// src/utils/api.js
import axios from "axios";

const API_URL = "http://localhost:8080/api";                                

export const fetchProducts = () => axios.get(`${API_URL}/products`);
export const addProduct = (product) => axios.post(`${API_URL}/products`, product);
export const updateProduct = (id, product) => axios.put(`${API_URL}/products/${id}`, product);
export const deleteProduct = (id) => axios.delete(`${API_URL}/products/${id}`);
