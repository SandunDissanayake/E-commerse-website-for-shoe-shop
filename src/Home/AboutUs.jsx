import React from 'react'
import CountUp from 'react-countup';

const subTitle = "Why Choose Us";
const title = "For Shopping";
const desc = "At our shoe shop, we combine quality craftsmanship with a wide selection of stylish options for every occasion. Our knowledgeable staff provides expert guidance to ensure you find the perfect fit. With a commitment to exceptional customer service and sustainable practices, shopping with us means supporting your community while stepping out in style. Discover your perfect pair today!"

const countList = [
{
iconName: 'icofont-users-alt-4',
count: '15500',
text: 'People reactions',
},

{
iconName: 'icofont-notification',
count: '100',
text: 'Rewards',
},
]

const AboutUs = () => {
  return (
    <div className='instructor-section style-2 padding-tb section-bg-ash'>
        <div className='container'>
            <div className='section-wrapper'>
                <div className='row g-4 justify-content-center align-items-center row-cols-1 row-cols-md-2 
                row-cols-xl-3'>
                    <div className='col'>
                        {
                            countList.map((val, i) =>(
                                <div key={i} className='count-item'>
                                    <div className='count-inner'>
                                        <div className='count-icon'>
                                            <i className={val.iconName}></i>

                                        </div>
                                        <div className='count-content'>
                                            <h2>
                                                <span className='count'><CountUp end={val.count} /></span>
                                                <span>+</span>

                                            </h2>
                                            <p>{val.text}</p>

                                        </div>

                                    </div>

                                </div>
                            ))
                        }

                    </div>
                    <div className='col'>
                        <div className='instructor-content'>
                            <span className='subtitle'>{subTitle}</span>
                            <h2 className='title'>{title}</h2>
                            <p>{desc}</p>
                            

                        </div>

                    </div>
                    <div className='col'>
                        
                    </div>

                </div>

            </div>

        </div>

    </div>
  )
}

export default AboutUs