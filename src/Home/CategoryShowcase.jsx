import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import Ratting from '../components/Ratting'; 

const title = "Our Products";

const ProductData = [
  {
    imgUrl: 'src/assets/images/categoryTab/01.jpg',
    cate: 'Nike',
    title: 'Nike Airforce',
    author: 'assets/images/course/author/01.jpg',
    brand: 'Nike',
    price: 'Rs.25000.00',
    id: 1,
  },
  {
    imgUrl: 'src/assets/images/categoryTab/02.jpg',
    cate: 'Addidas',
    title: 'Runfalcon 3.0',
    author: 'assets/images/course/author/02.jpg',
    brand: 'Addidas',
    price: 'Rs.12500.00',
    id: 2,
  },
  {
    imgUrl: 'src/assets/images/categoryTab/03.jpg',
    cate: 'Jordan',
    title: 'Jordan 4',
    author: 'src/assets/images/categoryTab/brand/apple.png',
    brand: 'Jordan',
    price: 'Rs.12000.00',
    id: 3,
  },
  {
    imgUrl: 'src/assets/images/categoryTab/04.jpg',
    cate: 'UnderArmor',
    title: 'Surge 3',
    author: 'assets/images/course/author/04.jpg',
    brand: 'UnderArmor',
    price: 'RS.25000.00',
    id: 4,
  },
  {
    imgUrl: 'src/assets/images/categoryTab/05.jpg',
    cate: 'Nike',
    title: 'AirForce 2',
    author: 'assets/images/course/author/05.jpg',
    brand: 'Nike',
    price: 'Rs.16500.00',
    id: 5,
  },
  {
    imgUrl: 'src/assets/images/categoryTab/06.jpg',
    cate: 'Addidas',
    title: 'Galaxy 6',
    author: 'assets/images/course/author/06.jpg',
    brand: 'Addidas',
    price: 'Rs,18000.00',
    id: 6,
  },
  {
    imgUrl: 'src/assets/images/categoryTab/07.jpg',
    cate: 'Fila',
    title: 'Sneaker',
    author: 'assets/images/course/author/01.jpg',
    brand: 'Fila',
    price: 'RS.10500.00',
    id: 7,
  },
  {
    imgUrl: 'src/assets/images/categoryTab/08.jpg',
    cate: 'New Balance',
    title: 'Sneaker',
    author: 'assets/images/course/author/02.jpg',
    brand: 'New Balance',
    price: 'Rs.30000.00',
    id: 8,
  },
];

const CategoryShowcase = () => {
  const [items, setItems] = useState(ProductData);

  const filterItem = (category) => {
    if (category === "All") {
      setItems(ProductData);
    } else {
      setItems(ProductData.filter(product => product.cate === category));
    }
  };

  return (
    <div className='course-section style-3 padding-tb'>
      <div className='course-shape one'>
        <img src="/src/assets/images/shape-img/icon/01.png" alt="" />
      </div>
      <div className='course-shape two'>
        <img src="/src/assets/images/shape-img/icon/02.png" alt="" />
      </div>

      <div className='container'>
        <div className='section-header'>
          <h2 className='title'>{title}</h2>
          <div className='course-filter-group'>
            <ul className='lab-ul'>
              <li onClick={() => filterItem("All")}>All</li>
              <li onClick={() => filterItem("Nike")}>Nike</li>
              <li onClick={() => filterItem("Addidas")}>Addidas</li>
              <li onClick={() => filterItem("Jordan")}>Jordan</li>
              <li onClick={() => filterItem("UnderArmor")}>UnderArmor</li>
              <li onClick={() => filterItem("New Balance")}>New Balance</li>
              <li onClick={() => filterItem("Fila")}>Fila</li>
            </ul>
          </div>
        </div>

        <div className='section-wrapper'>
          <div className='row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1'>
            {items.map((product) => (
              <div key={product.id} className='col'>
                <div className='course-item style-4'>
                  <div className='course-inner'>
                    <div className='course-thumb'>
                      <img src={product.imgUrl} alt={product.title} />
                      <div className='course-category'>
                        <div className='course-cate'>
                          <a href='#'>{product.cate}</a>
                        </div>
                        <div className='course-reiw'>
                          <Ratting />
                        </div>
                      </div>
                    </div>

                    <div className='course-content'>
                      <Link to={`/shop/${product.id}`}>
                        <h6>{product.title}</h6>
                      </Link>
                      <div className='course-footer'>
                        <div className='course-author'>
                          <Link to="/" className='ca-name'>{product.brand}</Link>
                        </div>
                        <div className='course-price'>
                          {product.price}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryShowcase;
