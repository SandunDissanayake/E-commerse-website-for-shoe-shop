import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PageHeader from '../components/Pageheader';
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import Search from './Search';
import ShopCategory from './ShopCategory';

const Shop = () => {
  const [GridList, setGridList] = useState(true);
  const [products, setProducts] = useState([]); 
  const [filteredProducts, setFilteredProducts] = useState([]); 
  const [currentPage, setCurrentPage] = useState(1);
  const productPerPage = 12;
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All'); 
  
  useEffect(() => {
    fetchProducts();
  }, []);

  
  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/product/getAllProducts');
      const productData = response.data || [];
      setProducts(productData);
      setFilteredProducts(productData); 
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

 
  useEffect(() => {
    let updatedProducts = [...products]; 
   
    if (selectedCategory !== 'All') {
      updatedProducts = updatedProducts.filter(
        (product) => product.category === selectedCategory
      );
    }

    
    if (searchTerm) {
      updatedProducts = updatedProducts.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(updatedProducts);
    setCurrentPage(1); 
  }, [selectedCategory, searchTerm, products]);


  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <PageHeader title="Our Shop" curPage="Shop" />
      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="shop-title d-flex flex-wrap justify-content-between">
                  <p>{`Showing ${indexOfFirstProduct + 1} - ${Math.min(indexOfLastProduct, filteredProducts.length)} of ${filteredProducts.length} Results`}</p>
                  <div className={`product-view-mode ${GridList ? "gridActive" : "listActive"}`}>
                    <a className="grid" onClick={() => setGridList(true)}>
                      <i className="icofont-ghost"></i>
                    </a>
                    <a className="list" onClick={() => setGridList(false)}>
                      <i className="icofont-listine-dots"></i>
                    </a>
                  </div>
                </div>

                
                <div>
                  <ProductCard GridList={GridList} products={currentProducts} />
                </div>

                <Pagination
                  productPerPage={productPerPage}
                  totalProducts={filteredProducts.length}
                  paginate={paginate}
                  activePage={currentPage}
                />
              </article>
            </div>

            <div className="col-lg-4 col-12">
              <aside>
                
                <Search products={products} />

                
                <ShopCategory
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
