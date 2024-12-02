import React from 'react'
import PageHeader from '../components/Pageheader';

const subTitle = "About Our Shoe Brand"; const title = "Good Quality Products"; const desc = "Welcome to Urban Steps, where style meets comfort! Founded in 5 years, our mission is to provide our customers with high-quality footwear that combines modern trends with timeless elegance. We believe that shoes are not just an accessory but an essential part of your personal style and comfort.";

const year = "5+"; const expareance = "Years Of Experiences";

const aboutList = [ { imgUrl: '/src/assets/images/about/icon/01.jpg', imgAlt: 'about icon rajibraj91 rajibraj', title: 'Skilled Instructors', desc: 'Distinctively provide acces mutfuncto users whereas communicate leveraged services', }, { imgUrl: '/src/assets/images/about/icon/02.jpg', imgAlt: 'about icon rajibraj91 rajibraj', title: 'Get Certificate', desc: 'Distinctively provide acces mutfuncto users whereas communicate leveraged services', }, { imgUrl: '/src/assets/images/about/icon/03.jpg', imgAlt: 'about icon rajibraj91 rajibraj', title: 'Online Classes', desc: 'Distinctively provide acces mutfuncto users whereas communicate leveraged services', }, ]

const About = () => {
  return (
    <div>
        <PageHeader title={"About Our Brand"} curPage={"About"}/>
        <div className='about-section style-3 padding-tb section-bg'>
            <div className='container'>
                <div className='row justify-content-center row-cols-xl-2 row-cols-1 align-items-center'>
                    <div className='col'>
                        <div className='about-left'>
                            <div className='about-thumb'>
                                <img src="/src/assets/images/about/01.jpg" alt="" />

                            </div>
                            <div className='abs-thumb'>
                                <img src="/src/assets/images/about/02.jpg" alt="" />

                            </div>
                            <div className='about-left-content'>
                                <h3>{year}</h3>
                                <p>{expareance}</p>

                            </div>

                        </div>

                    </div>
                    <div className='col'>
                        <div className='about-right'>
                            <div className='section-header'>
                                <span className='sibtitle'>{subTitle}</span>
                                <h2 className='title'>{title}</h2>
                                <p>{desc}</p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    </div>
  )
}

export default About