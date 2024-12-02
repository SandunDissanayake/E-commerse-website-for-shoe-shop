import React from 'react';
import { Link } from 'react-router-dom'; 

const subTitle = "Choose Any Shoe Products";
const title = "Buy Everything with Us";
const btnText = "Get Started Now";

const categoryList = [
  {
    imgUrl: 'src/assets/images/category/01.jpg',
    imgAlt: 'Nike',
    iconName: 'icofont-brand-windows',
    title: 'Nike',
  },
  {
    imgUrl: 'src/assets/images/category/02.jpg',
    imgAlt: 'Jordan',
    iconName: 'icofont-brand-windows',
    title: 'Jordan',
  },
  {
    imgUrl: 'src/assets/images/category/03.jpg',
    imgAlt: 'Addidas',
    iconName: 'icofont-brand-windows',
    title: 'Addidas',
  },
  {
    imgUrl: 'src/assets/images/category/04.jpg',
    imgAlt: 'Under Armor',
    iconName: 'icofont-brand-windows',
    title: 'Under Armor',
  },
  {
    imgUrl: 'src/assets/images/category/05.jpg',
    imgAlt: 'New Balance',
    iconName: 'icofont-brand-windows',
    title: 'New Balance',
  },
  {
    imgUrl: 'src/assets/images/category/06.jpg',
    imgAlt: 'Fila',
    iconName: 'icofont-brand-windows',
    title: 'Fila',
  },
];

const Homecategory = () => {
  return (
    <div className='category-section style-4 padding-tb'>
      <div className='container'>
        <div className='section-header text-center'>
          <span className='subtitle'>{subTitle}</span>
          <h2 className='title'>{title}</h2>
        </div>

        <div className='section-wrapper'>
          <div className='row g-4 justify-content-center row-cols-md-3 row-cols-sm-2 row-cols-1'>
            {categoryList.map((val, i) => (
              <div key={i} className='col'>
                <Link to="/shop" className='category-item'>
                  <div className='category-inner'>
                    <div className='category-thumb'>
                      <img src={val.imgUrl} alt={val.imgAlt} />
                    </div>
                    <div className='category-content'>
                      <div className='cafe-icon'>
                        <i className={val.iconName}></i>
                      </div>
                      <h6>{val.title}</h6> 
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className='text-center mt-5'>
            <Link to="/shop" className='lab-btn'>
              <span>{btnText}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homecategory;
