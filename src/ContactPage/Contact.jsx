import React from 'react'
import PageHeader from '../components/Pageheader'; 
import ContactPhoto from '../components/ContactPhoto';

const subTitle = "Contact with Us"; const title = "We're Here to Help"; const conSubTitle = "Get in touch with Contact us"; const conTitle = "Fill The Form Below So We Can Get To Know You And Your Needs Better."; const btnText = "Send our Message";

const contactList = [ { imgUrl: "/src/assets/images/icon/01.png", imgAlt: "contact icon", title: "Office Address", desc: "Kurunegala,Sri Lanka", }, { imgUrl: "/src/assets/images/icon/02.png", imgAlt: "contact icon", title: "Phone number", desc: "+94 7723981287", }, { imgUrl: "/src/assets/images/icon/03.png", imgAlt: "contact icon", title: "Send email", desc: "urbansteps@gmail.com", }, { imgUrl: "/src/assets/images/icon/04.png", imgAlt: "contact icon", title: "Our website", desc: "www.UrbanSteps.com", }, ];

const Contact = () => {
  return (
    <div>
        <PageHeader title={"Contact with Us"} curPage={"Contact Us"}/>
        <div className='map-address-section padding-tb section-bg'>
            <div className='container'>
                <div className='section-header text-center'>
                    <span className='subtitle'>{subTitle}</span>
                    <h2 className='title'>{title}</h2>

                </div>
                <div className='section-wrapper'>
                    <div className='row flex-row-reverse'>
                        <div className='col-xl-4 col-lg-5 col-12'>
                            <div className='contact-wrapper'>
                                {
                                   contactList.map((val, i) => (
                                    <div key={i} className='contact-item'>
                                        <div className='contact-thumb'>
                                            <img src={val.imgUrl} alt="" />

                                        </div>
                                        <div className='contact-content'>
                                            <h6 className='title'>{val.title}</h6>
                                            <p>{val.desc}</p>

                                        </div>

                                    </div>
                                   ))
                                }

                            </div>

                        </div>

                        <div className='col-xl-8 col-lg-7 col-12'>
                            <ContactPhoto/>

                        </div>

                    </div>

                </div>

            </div>

        </div>

        <div className='contact-section padding-tb'>
            <div className='container'>
                <div className='section-header text-center'>
                    <span className='subtitle'>{subTitle}</span>
                    <h2 className='title'>{conTitle}</h2>

                </div>

                <div className='section-wrapper'>
                    <form className='contact-form'>
                        <div className='form-group'>
                            <input type="text" name='name' id='name' placeholder='Your Name' />

                        </div>
                        <div className='form-group'>
                            <input type="email" name='email' id='email' placeholder='Your Email' />

                        </div>
                        <div className='form-group'>
                            <input type="number" name='number' id='number' placeholder='Phone Number' />

                        </div>
                        <div className='form-group'>
                            <input type="text" name='subject' id='subject' placeholder='Subject' />

                        </div>
                        <div className='form-group w-100'>
                            <textarea name="message" id="message" rows="8" placeholder='Your Message'></textarea>

                        </div>
                        <div className='form-group w-100 text-center'>
                            <button className='lab-btn'>
                                <span>{btnText}</span>

                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </div>
    </div>
  )
}

export default Contact