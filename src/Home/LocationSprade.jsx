import React from 'react';
import { Link } from 'react-router-dom'; 

const title = "More Than 30,000 Customers";

const desc = "Buy products on any device with our website & enjoy your time. Just start shopping.";

const clientsList = [
  {
    imgUrl: '/src/assets/images/clients/avater.jpg',
    imgAlt: 'Customer Avatar',
    text: 'Join with Us',
  },
  {
    imgUrl: '/src/assets/images/clients/avater.jpg',
    imgAlt: 'Customer Avatar',
    text: 'Join with Us',
  },
  {
    imgUrl: '/src/assets/images/clients/avater.jpg',
    imgAlt: 'Customer Avatar',
    text: 'Join with Us',
  },
  {
    imgUrl: '/src/assets/images/clients/avater.jpg',
    imgAlt: 'Customer Avatar',
    text: 'Join with Us',
  },
  {
    imgUrl: '/src/assets/images/clients/avater.jpg',
    imgAlt: 'Customer Avatar',
    text: 'Join with Us',
  },
  {
    imgUrl: '/src/assets/images/clients/avater.jpg',
    imgAlt: 'Customer Avatar',
    text: 'Join with Us',
  },
  {
    imgUrl: '/src/assets/images/clients/avater.jpg',
    imgAlt: 'Customer Avatar',
    text: 'Join with Us',
  },
];

const LocationSprade = () => {
  return (
    <div className='clients-section style-2 padding-tb'>
      <div className='container'>
        <div className='section-header text-center'>
          <h2 className='title'>{title}</h2>
          <p>{desc}</p>
        </div>

        <div className='section-wrapper'>
          <div className='clients'>
            {clientsList.map((val, i) => (
              <div key={i} className='client-list'>
                <Link to="/sign-up" className='client-content'>
                  <img src={val.imgUrl} alt={val.imgAlt} />
                  <span>{val.text}</span>
                </Link>
                <div className='client-thumb'>
                    <img src={val.imgUrl} alt="" />

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationSprade;
